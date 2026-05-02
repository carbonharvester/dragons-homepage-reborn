import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { CheckCircle, XCircle, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface Document {
  id: string;
  booking_id: string;
  document_type: string;
  file_name: string;
  file_path: string;
  status: string;
  uploaded_at: string;
  booking: {
    student_first_name: string;
    student_last_name: string;
    trip: {
      title: string;
    };
  };
}

const ReviewDocuments = () => {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);
  const [showRejectDialog, setShowRejectDialog] = useState(false);
  const [rejectionReason, setRejectionReason] = useState("");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    loadDocuments();
  }, []);

  const loadDocuments = async () => {
    try {
      const { data, error } = await supabase
        .from("booking_documents")
        .select(`
          *,
          booking:bookings(
            student_first_name,
            student_last_name,
            trip:trips(title)
          )
        `)
        .order("uploaded_at", { ascending: false });

      if (error) throw error;
      setDocuments(data || []);
    } catch (error: any) {
      console.error("Error loading documents:", error);
      toast.error("Failed to load documents");
    } finally {
      setIsLoading(false);
    }
  };

  const handleApprove = async (docId: string) => {
    setProcessing(true);
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      const { error } = await supabase
        .from("booking_documents")
        .update({
          status: "approved",
          reviewed_by: session?.user.id,
          reviewed_at: new Date().toISOString(),
        })
        .eq("id", docId);

      if (error) throw error;
      toast.success("Document approved");
      loadDocuments();
    } catch (error: any) {
      console.error("Error approving document:", error);
      toast.error("Failed to approve document");
    } finally {
      setProcessing(false);
    }
  };

  const handleReject = async () => {
    if (!selectedDoc || !rejectionReason) return;

    setProcessing(true);
    try {
      const { data: { session } } = await supabase.auth.getSession();

      const { error } = await supabase
        .from("booking_documents")
        .update({
          status: "rejected",
          reviewed_by: session?.user.id,
          reviewed_at: new Date().toISOString(),
          rejection_reason: rejectionReason,
        })
        .eq("id", selectedDoc.id);

      if (error) throw error;
      toast.success("Document rejected");
      setShowRejectDialog(false);
      setRejectionReason("");
      setSelectedDoc(null);
      loadDocuments();
    } catch (error: any) {
      console.error("Error rejecting document:", error);
      toast.error("Failed to reject document");
    } finally {
      setProcessing(false);
    }
  };

  const viewDocument = async (doc: Document) => {
    try {
      const bucketMap: Record<string, string> = {
        passport: "passports",
        medical_form: "medical-forms",
        visa: "other-documents",
        insurance: "other-documents",
        other: "other-documents",
      };

      const bucket = bucketMap[doc.document_type];
      const { data } = await supabase.storage
        .from(bucket)
        .createSignedUrl(doc.file_path, 3600);

      if (data?.signedUrl) {
        window.open(data.signedUrl, "_blank");
      }
    } catch (error: any) {
      console.error("Error viewing document:", error);
      toast.error("Failed to view document");
    }
  };

  const getDocumentsByStatus = (status: string) =>
    documents.filter((doc) => doc.status === status);

  const DocumentCard = ({ doc }: { doc: Document }) => (
    <Card className="p-4">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h4 className="font-semibold">
            {doc.booking?.student_first_name} {doc.booking?.student_last_name}
          </h4>
          <p className="text-sm text-muted-foreground">{doc.booking?.trip?.title}</p>
          <p className="text-sm mt-2">
            <span className="font-medium">Type:</span> {doc.document_type.replace("_", " ")}
          </p>
          <p className="text-sm">
            <span className="font-medium">File:</span> {doc.file_name}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Uploaded: {new Date(doc.uploaded_at).toLocaleString()}
          </p>
        </div>
        
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => viewDocument(doc)}
          >
            <Eye className="w-4 h-4" />
          </Button>
          {doc.status === "pending" && (
            <>
              <Button
                size="sm"
                onClick={() => handleApprove(doc.id)}
                disabled={processing}
              >
                <CheckCircle className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="destructive"
                onClick={() => {
                  setSelectedDoc(doc);
                  setShowRejectDialog(true);
                }}
                disabled={processing}
              >
                <XCircle className="w-4 h-4" />
              </Button>
            </>
          )}
        </div>
      </div>
    </Card>
  );

  if (isLoading) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <>
      <div className="p-8">
        <h1 className="text-3xl font-academy-bold mb-6">Review Documents</h1>

        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList>
            <TabsTrigger value="pending">
              Pending ({getDocumentsByStatus("pending").length})
            </TabsTrigger>
            <TabsTrigger value="approved">
              Approved ({getDocumentsByStatus("approved").length})
            </TabsTrigger>
            <TabsTrigger value="rejected">
              Rejected ({getDocumentsByStatus("rejected").length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="space-y-4">
            {getDocumentsByStatus("pending").length === 0 ? (
              <Card className="p-8 text-center text-muted-foreground">
                No pending documents to review
              </Card>
            ) : (
              getDocumentsByStatus("pending").map((doc) => (
                <DocumentCard key={doc.id} doc={doc} />
              ))
            )}
          </TabsContent>

          <TabsContent value="approved" className="space-y-4">
            {getDocumentsByStatus("approved").map((doc) => (
              <DocumentCard key={doc.id} doc={doc} />
            ))}
          </TabsContent>

          <TabsContent value="rejected" className="space-y-4">
            {getDocumentsByStatus("rejected").map((doc) => (
              <DocumentCard key={doc.id} doc={doc} />
            ))}
          </TabsContent>
        </Tabs>
      </div>

      <Dialog open={showRejectDialog} onOpenChange={setShowRejectDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Reject Document</DialogTitle>
            <DialogDescription>
              Please provide a reason for rejection
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label>Rejection Reason</Label>
              <Textarea
                value={rejectionReason}
                onChange={(e) => setRejectionReason(e.target.value)}
                placeholder="Enter reason for rejection..."
                rows={4}
              />
            </div>
            <div className="flex gap-2 justify-end">
              <Button
                variant="outline"
                onClick={() => {
                  setShowRejectDialog(false);
                  setRejectionReason("");
                }}
              >
                Cancel
              </Button>
              <Button
                variant="destructive"
                onClick={handleReject}
                disabled={!rejectionReason || processing}
              >
                Reject Document
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ReviewDocuments;
