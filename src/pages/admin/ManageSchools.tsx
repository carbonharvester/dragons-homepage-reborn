import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import SEO from "@/components/SEO";
import { ArrowLeft, Plus, Copy } from "lucide-react";

interface School {
  id: string;
  name: string;
  enrollment_code: string;
  location: string;
  contact_email: string;
  contact_phone: string;
  active: boolean;
  created_at: string;
}

const ManageSchools = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [schools, setSchools] = useState<School[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    contact_email: "",
    contact_phone: "",
  });

  useEffect(() => {
    checkAuth();
    loadSchools();
  }, []);

  const checkAuth = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      navigate("/admin/login");
      return;
    }

    const { data: roles } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", user.id)
      .eq("role", "super_admin");

    if (!roles || roles.length === 0) {
      toast({
        variant: "destructive",
        title: "Access Denied",
        description: "Super admin access required.",
      });
      navigate("/admin/dashboard");
    }
  };

  const loadSchools = async () => {
    try {
      const { data, error } = await supabase
        .from("schools")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setSchools(data || []);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const generateEnrollmentCode = () => {
    return `SCH${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
  };

  const handleCreateSchool = async () => {
    try {
      const enrollmentCode = generateEnrollmentCode();
      
      const { error } = await supabase
        .from("schools")
        .insert({
          ...formData,
          enrollment_code: enrollmentCode,
        });

      if (error) throw error;

      toast({
        title: "School created!",
        description: `Enrollment code: ${enrollmentCode}`,
      });

      setIsDialogOpen(false);
      setFormData({ name: "", location: "", contact_email: "", contact_phone: "" });
      loadSchools();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    }
  };

  const copyEnrollmentCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Copied!",
      description: "Enrollment code copied to clipboard",
    });
  };

  return (
    <>
      <SEO title="Manage Schools | Admin" description="Manage schools and enrollment codes" />
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <Button variant="ghost" onClick={() => navigate("/admin/dashboard")} className="mb-2">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Button>
            <h1 className="text-2xl font-bold text-dragon-dark">Manage Schools</h1>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Schools</CardTitle>
                <CardDescription>Create and manage school accounts</CardDescription>
              </div>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add School
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Create New School</DialogTitle>
                    <DialogDescription>
                      Add a school and generate an enrollment code
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">School Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Contact Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.contact_email}
                        onChange={(e) => setFormData({ ...formData, contact_email: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Contact Phone</Label>
                      <Input
                        id="phone"
                        value={formData.contact_phone}
                        onChange={(e) => setFormData({ ...formData, contact_phone: e.target.value })}
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleCreateSchool}>Create School</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <p>Loading schools...</p>
              ) : schools.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">
                  No schools yet. Create your first school to get started.
                </p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>School Name</TableHead>
                      <TableHead>Enrollment Code</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {schools.map((school) => (
                      <TableRow key={school.id}>
                        <TableCell className="font-medium">{school.name}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <code className="bg-dragon-beige px-2 py-1 rounded text-sm">
                              {school.enrollment_code}
                            </code>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => copyEnrollmentCode(school.enrollment_code)}
                            >
                              <Copy className="h-3 w-3" />
                            </Button>
                          </div>
                        </TableCell>
                        <TableCell>{school.location || "-"}</TableCell>
                        <TableCell>{school.contact_email || "-"}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded text-xs ${
                            school.active 
                              ? "bg-green-100 text-green-800" 
                              : "bg-gray-100 text-gray-800"
                          }`}>
                            {school.active ? "Active" : "Inactive"}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </main>
      </div>
    </>
  );
};

export default ManageSchools;
