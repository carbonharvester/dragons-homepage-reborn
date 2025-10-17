import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import SEO from "@/components/SEO";
import { ArrowLeft } from "lucide-react";
import { format } from "date-fns";

interface Student {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  school: {
    name: string;
  };
  created_at: string;
  interests_count: number;
  bookings_count: number;
}

const ViewStudents = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [students, setStudents] = useState<Student[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuth();
    loadStudents();
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
      .in("role", ["super_admin", "school_admin"]);

    if (!roles || roles.length === 0) {
      toast({
        variant: "destructive",
        title: "Access Denied",
        description: "Admin access required.",
      });
      navigate("/admin/dashboard");
    }
  };

  const loadStudents = async () => {
    try {
      const { data, error } = await supabase
        .from("students")
        .select(`
          id,
          first_name,
          last_name,
          email,
          created_at,
          schools!inner(name)
        `)
        .order("created_at", { ascending: false });

      if (error) throw error;

      // Get counts for interests and bookings
      const studentsWithCounts = await Promise.all(
        (data || []).map(async (student) => {
          const [interestsRes, bookingsRes] = await Promise.all([
            supabase
              .from("student_interests")
              .select("id", { count: "exact", head: true })
              .eq("student_id", student.id),
            supabase
              .from("bookings")
              .select("id", { count: "exact", head: true })
              .eq("student_id", student.id),
          ]);

          return {
            ...student,
            school: student.schools,
            interests_count: interestsRes.count || 0,
            bookings_count: bookingsRes.count || 0,
          };
        })
      );

      setStudents(studentsWithCounts);
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

  return (
    <>
      <SEO title="View Students | Admin" description="View registered students" />
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <Button variant="ghost" onClick={() => navigate("/admin/dashboard")} className="mb-2">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Button>
            <h1 className="text-2xl font-bold text-dragon-dark">View Students</h1>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <Card>
            <CardHeader>
              <CardTitle>Registered Students</CardTitle>
              <CardDescription>View all students and their activity</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <p>Loading students...</p>
              ) : students.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">
                  No students registered yet.
                </p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>School</TableHead>
                      <TableHead>Interests</TableHead>
                      <TableHead>Bookings</TableHead>
                      <TableHead>Registered</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {students.map((student) => (
                      <TableRow key={student.id}>
                        <TableCell className="font-medium">
                          {student.first_name} {student.last_name}
                        </TableCell>
                        <TableCell>{student.email}</TableCell>
                        <TableCell>{student.school.name}</TableCell>
                        <TableCell>{student.interests_count}</TableCell>
                        <TableCell>{student.bookings_count}</TableCell>
                        <TableCell>
                          {format(new Date(student.created_at), "MMM d, yyyy")}
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

export default ViewStudents;
