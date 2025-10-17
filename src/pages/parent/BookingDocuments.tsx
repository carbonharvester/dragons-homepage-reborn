import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { ArrowLeft, Upload, FileText, CheckCircle, XCircle, Clock } from "lucide-react";
import SEO from "@/components/SEO";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

interface Document {
  id: string;
  document_type: string;
  file_name: string;
  status: string;
  uploaded_at: string;
  rejection_reason?: string;
}

const BookingDocuments = () => {
  const navigate = useNavigate();
  const { bookingId } = useParams();
  const [booking, setBooking] = useState<any>(null);
  const [documents, setDocuments] = useState<Document[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    loadBookingAndDocuments();
  }, [bookingId]);

  const loadBookingAndDocuments = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/parent/login");
        return;
      }

      // Load booking
      const { data: bookingData, error: bookingError } = await supabase
        .from("bookings")
        .select("*, trip:trips(title)")
        .eq("id", bookingId)
        .single();

      if (bookingError) throw bookingError;
      setBooking(bookingData);

      // Load documents
      const { data: docsData, error: docsError } = await supabase
        .from("booking_documents")
        .select("*")
        .eq("booking_id", bookingId)
        .order("uploaded_at", { ascending: false });

      if (docsError) throw docsError;
      setDocuments(docsData || []);
    } catch (error: any) {
      console.error("Error loading booking:", error);
      toast.error("Failed to load booking details");
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileUpload = async (
    file: File,
    documentType: string,
    bucketName: string
  ) => {
    if (!file || !bookingId) return;

    setUploading(true);
    try {
      // Upload to storage
      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `${bookingId}/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from(bucketName)
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // Record in database
      const { error: dbError } = await supabase
        .from("booking_documents")
        .insert({
          booking_id: bookingId,
          document_type: documentType,
          file_path: filePath,
          file_name: file.name,
          file_size: file.size,
          mime_type: file.type,
        });

      if (dbError) throw dbError;

      toast.success("Document uploaded successfully");
      loadBookingAndDocuments();
    } catch (error: any) {
      console.error("Upload error:", error);
      toast.error("Failed to upload document");
    } finally {
      setUploading(false);
    }
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { variant: any; icon: any }> = {
      pending: { variant: "secondary", icon: Clock },
      approved: { variant: "default", icon: CheckCircle },
      rejected: { variant: "destructive", icon: XCircle },
      resubmit_required: { variant: "destructive", icon: XCircle },
    };

    const { variant, icon: Icon } = variants[status] || variants.pending;
    return (
      <Badge variant={variant} className="flex items-center gap-1">
        <Icon className="w-3 h-3" />
        {status.replace("_", " ").toUpperCase()}
      </Badge>
    );
  };

  const getDocumentsByType = (type: string) =>
    documents.filter((doc) => doc.document_type === type);

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <>
      <SEO title="Upload Documents | Parent Portal" description="Upload trip documents" />
      
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/parent/dashboard")}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>

          <div className="mb-6">
            <h1 className="text-3xl font-academy-bold mb-2">Upload Documents</h1>
            <p className="text-muted-foreground">
              {booking?.student_first_name} {booking?.student_last_name} -{" "}
              {booking?.trip?.title}
            </p>
          </div>

          <Tabs defaultValue="passport" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="passport">Passport</TabsTrigger>
              <TabsTrigger value="medical">Medical Forms</TabsTrigger>
              <TabsTrigger value="visa">Visa</TabsTrigger>
              <TabsTrigger value="other">Other</TabsTrigger>
            </TabsList>

            <TabsContent value="passport">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Passport Copy</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Upload a clear copy of the passport information page
                </p>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="passport-upload">Upload Passport</Label>
                    <Input
                      id="passport-upload"
                      type="file"
                      accept="image/*,application/pdf"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleFileUpload(file, "passport", "passports");
                      }}
                      disabled={uploading}
                    />
                  </div>

                  <div className="space-y-2">
                    {getDocumentsByType("passport").map((doc) => (
                      <div
                        key={doc.id}
                        className="flex items-center justify-between p-3 border rounded"
                      >
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5" />
                          <div>
                            <p className="font-medium">{doc.file_name}</p>
                            <p className="text-xs text-muted-foreground">
                              {new Date(doc.uploaded_at).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <div>
                          {getStatusBadge(doc.status)}
                          {doc.rejection_reason && (
                            <p className="text-xs text-destructive mt-1">
                              {doc.rejection_reason}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="medical">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Medical Forms</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Upload completed medical forms and certificates
                </p>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="medical-upload">Upload Medical Form</Label>
                    <Input
                      id="medical-upload"
                      type="file"
                      accept="application/pdf,image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleFileUpload(file, "medical_form", "medical-forms");
                      }}
                      disabled={uploading}
                    />
                  </div>

                  <div className="space-y-2">
                    {getDocumentsByType("medical_form").map((doc) => (
                      <div
                        key={doc.id}
                        className="flex items-center justify-between p-3 border rounded"
                      >
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5" />
                          <div>
                            <p className="font-medium">{doc.file_name}</p>
                            <p className="text-xs text-muted-foreground">
                              {new Date(doc.uploaded_at).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        {getStatusBadge(doc.status)}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="visa">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Visa Documents</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Upload visa documents if required
                </p>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="visa-upload">Upload Visa</Label>
                    <Input
                      id="visa-upload"
                      type="file"
                      accept="application/pdf,image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleFileUpload(file, "visa", "other-documents");
                      }}
                      disabled={uploading}
                    />
                  </div>

                  <div className="space-y-2">
                    {getDocumentsByType("visa").map((doc) => (
                      <div
                        key={doc.id}
                        className="flex items-center justify-between p-3 border rounded"
                      >
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5" />
                          <div>
                            <p className="font-medium">{doc.file_name}</p>
                            <p className="text-xs text-muted-foreground">
                              {new Date(doc.uploaded_at).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        {getStatusBadge(doc.status)}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="other">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Other Documents</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Upload insurance, consent forms, or other required documents
                </p>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="other-upload">Upload Document</Label>
                    <Input
                      id="other-upload"
                      type="file"
                      accept="application/pdf,image/*,.doc,.docx"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleFileUpload(file, "other", "other-documents");
                      }}
                      disabled={uploading}
                    />
                  </div>

                  <div className="space-y-2">
                    {getDocumentsByType("other").map((doc) => (
                      <div
                        key={doc.id}
                        className="flex items-center justify-between p-3 border rounded"
                      >
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5" />
                          <div>
                            <p className="font-medium">{doc.file_name}</p>
                            <p className="text-xs text-muted-foreground">
                              {new Date(doc.uploaded_at).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        {getStatusBadge(doc.status)}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default BookingDocuments;
