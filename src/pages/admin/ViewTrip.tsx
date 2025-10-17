import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import SEO from "@/components/SEO";
import { ArrowLeft, Users, CheckCircle } from "lucide-react";
import { format } from "date-fns";

interface Trip {
  id: string;
  title: string;
  destination: string;
  trip_start_date: string;
  trip_end_date: string;
  max_participants: number | null;
  base_price_aed: number;
}

interface Participant {
  id: string;
  student_first_name: string;
  student_last_name: string;
  student_gender: string;
  student_date_of_birth: string;
  passport_number: string;
  passport_nationality: string;
  passport_expiry_date: string;
  emergency_contact_name: string;
  emergency_contact_phone: string;
  emergency_contact_email: string;
  emergency_contact_relationship: string;
  medical_notes: string;
  allergies: string;
  dietary_requirements: string;
  meal_code: string;
  addons: Array<{ name: string; quantity: number }>;
  status: string;
  payment_status: string;
}

const ViewTrip = () => {
  const { tripId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [trip, setTrip] = useState<Trip | null>(null);
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [interestsCount, setInterestsCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedParticipant, setSelectedParticipant] = useState<Participant | null>(null);

  useEffect(() => {
    checkAuth();
    loadTripData();
  }, [tripId]);

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

  const loadTripData = async () => {
    try {
      // Load trip details
      const { data: tripData, error: tripError } = await supabase
        .from("trips")
        .select("*")
        .eq("id", tripId)
        .single();

      if (tripError) throw tripError;
      setTrip(tripData);

      // Load interests count
      const { count: interestsCount } = await supabase
        .from("student_interests")
        .select("*", { count: "exact", head: true })
        .eq("trip_id", tripId);

      setInterestsCount(interestsCount || 0);

      // Load bookings with add-ons
      const { data: bookingsData, error: bookingsError } = await supabase
        .from("bookings")
        .select(`
          id,
          student_first_name,
          student_last_name,
          student_gender,
          student_date_of_birth,
          passport_number,
          passport_nationality,
          passport_expiry_date,
          emergency_contact_name,
          emergency_contact_phone,
          emergency_contact_email,
          emergency_contact_relationship,
          medical_notes,
          allergies,
          dietary_requirements,
          meal_code,
          status,
          payment_status
        `)
        .eq("trip_id", tripId)
        .in("status", ["confirmed", "pending"]);

      if (bookingsError) throw bookingsError;

      // Load add-ons for each booking
      const participantsWithAddons = await Promise.all(
        (bookingsData || []).map(async (booking) => {
          const { data: addonsData } = await supabase
            .from("booking_addons")
            .select(`
              quantity,
              addons!inner(name)
            `)
            .eq("booking_id", booking.id);

          return {
            ...booking,
            addons: (addonsData || []).map((a: any) => ({
              name: a.addons.name,
              quantity: a.quantity,
            })),
          };
        })
      );

      setParticipants(participantsWithAddons);
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

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading trip details...</p>
      </div>
    );
  }

  if (!trip) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Trip not found</p>
      </div>
    );
  }

  return (
    <>
      <SEO title={`${trip.title} | Admin`} description="View trip details and participants" />
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <Button variant="ghost" onClick={() => navigate("/admin/trips")} className="mb-2">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Trips
            </Button>
            <h1 className="text-2xl font-bold text-dragon-dark">{trip.title}</h1>
            <p className="text-muted-foreground">{trip.destination}</p>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8 space-y-6">
          {/* Trip Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Trip Dates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  {format(new Date(trip.trip_start_date), "MMM d, yyyy")} -{" "}
                  {format(new Date(trip.trip_end_date), "MMM d, yyyy")}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Interests Registered
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{interestsCount}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  Confirmed Bookings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">
                  {participants.filter((p) => p.status === "confirmed").length}
                  {trip.max_participants && ` / ${trip.max_participants}`}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Base Price</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{trip.base_price_aed.toLocaleString()} AED</p>
              </CardContent>
            </Card>
          </div>

          {/* Participants List */}
          <Card>
            <CardHeader>
              <CardTitle>Participants</CardTitle>
              <CardDescription>
                {participants.length} participant{participants.length !== 1 ? "s" : ""} registered
              </CardDescription>
            </CardHeader>
            <CardContent>
              {participants.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">
                  No participants yet.
                </p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Gender</TableHead>
                      <TableHead>DOB</TableHead>
                      <TableHead>Passport</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Payment</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {participants.map((participant) => (
                      <TableRow key={participant.id}>
                        <TableCell className="font-medium">
                          {participant.student_first_name} {participant.student_last_name}
                        </TableCell>
                        <TableCell>{participant.student_gender || "-"}</TableCell>
                        <TableCell>
                          {participant.student_date_of_birth
                            ? format(new Date(participant.student_date_of_birth), "MMM d, yyyy")
                            : "-"}
                        </TableCell>
                        <TableCell>{participant.passport_number || "-"}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              participant.status === "confirmed"
                                ? "default"
                                : participant.status === "pending"
                                ? "secondary"
                                : "destructive"
                            }
                          >
                            {participant.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              participant.payment_status === "paid"
                                ? "default"
                                : participant.payment_status === "pending"
                                ? "secondary"
                                : "destructive"
                            }
                          >
                            {participant.payment_status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setSelectedParticipant(participant)}
                          >
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>

          {/* Participant Details Modal */}
          {selectedParticipant && (
            <Card className="mt-6">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>
                  {selectedParticipant.student_first_name} {selectedParticipant.student_last_name} - Details
                </CardTitle>
                <Button variant="ghost" onClick={() => setSelectedParticipant(null)}>
                  Close
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Personal Information</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Gender</p>
                      <p className="font-medium">{selectedParticipant.student_gender || "-"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Date of Birth</p>
                      <p className="font-medium">
                        {selectedParticipant.student_date_of_birth
                          ? format(new Date(selectedParticipant.student_date_of_birth), "MMM d, yyyy")
                          : "-"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Passport Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Passport Information</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Passport Number</p>
                      <p className="font-medium">{selectedParticipant.passport_number || "-"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Nationality</p>
                      <p className="font-medium">{selectedParticipant.passport_nationality || "-"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Expiry Date</p>
                      <p className="font-medium">
                        {selectedParticipant.passport_expiry_date
                          ? format(new Date(selectedParticipant.passport_expiry_date), "MMM d, yyyy")
                          : "-"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Emergency Contact</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Name</p>
                      <p className="font-medium">{selectedParticipant.emergency_contact_name || "-"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Relationship</p>
                      <p className="font-medium">{selectedParticipant.emergency_contact_relationship || "-"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium">{selectedParticipant.emergency_contact_phone || "-"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">{selectedParticipant.emergency_contact_email || "-"}</p>
                    </div>
                  </div>
                </div>

                {/* Medical & Dietary */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Medical & Dietary Information</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Medical Notes</p>
                      <p className="font-medium">{selectedParticipant.medical_notes || "None"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Allergies</p>
                      <p className="font-medium">{selectedParticipant.allergies || "None"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Dietary Requirements</p>
                      <p className="font-medium">{selectedParticipant.dietary_requirements || "None"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Meal Code</p>
                      <p className="font-medium">{selectedParticipant.meal_code || "-"}</p>
                    </div>
                  </div>
                </div>

                {/* Add-ons */}
                {selectedParticipant.addons.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Add-Ons</h3>
                    <ul className="list-disc list-inside space-y-1">
                      {selectedParticipant.addons.map((addon, index) => (
                        <li key={index}>
                          {addon.name} (Qty: {addon.quantity})
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </main>
      </div>
    </>
  );
};

export default ViewTrip;
