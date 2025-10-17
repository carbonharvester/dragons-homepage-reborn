import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Users, ArrowUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface TripCapacity {
  id: string;
  title: string;
  max_participants: number;
  trip_start_date: string;
  confirmed_bookings: number;
  waitlist: any[];
}

const TripCapacity = () => {
  const [trips, setTrips] = useState<TripCapacity[]>([]);
  const [selectedTrip, setSelectedTrip] = useState<TripCapacity | null>(null);
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadTrips();
  }, []);

  const loadTrips = async () => {
    try {
      const { data: tripsData, error: tripsError } = await supabase
        .from("trips")
        .select("id, title, max_participants, trip_start_date")
        .order("trip_start_date", { ascending: true });

      if (tripsError) throw tripsError;

      // Load bookings and waitlist for each trip
      const tripsWithCapacity = await Promise.all(
        (tripsData || []).map(async (trip) => {
          const { count: bookingsCount } = await supabase
            .from("bookings")
            .select("*", { count: "exact", head: true })
            .eq("trip_id", trip.id)
            .in("status", ["confirmed", "pending"]);

          const { data: waitlistData } = await supabase
            .from("student_interests")
            .select(`
              *,
              student:students(first_name, last_name, email)
            `)
            .eq("trip_id", trip.id)
            .not("waitlist_position", "is", null)
            .order("waitlist_position", { ascending: true });

          return {
            ...trip,
            confirmed_bookings: bookingsCount || 0,
            waitlist: waitlistData || [],
          };
        })
      );

      setTrips(tripsWithCapacity);
    } catch (error: any) {
      console.error("Error loading trips:", error);
      toast.error("Failed to load trip capacity data");
    } finally {
      setIsLoading(false);
    }
  };

  const promoteFromWaitlist = async (interestId: string, tripId: string) => {
    try {
      // Remove from waitlist
      const { error } = await supabase
        .from("student_interests")
        .update({
          waitlist_position: null,
          waitlisted_at: null,
          status: "approved",
        })
        .eq("id", interestId);

      if (error) throw error;

      toast.success("Student promoted from waitlist");
      loadTrips();
      setShowWaitlist(false);
    } catch (error: any) {
      console.error("Error promoting from waitlist:", error);
      toast.error("Failed to promote from waitlist");
    }
  };

  const getCapacityColor = (current: number, max: number | null) => {
    if (!max) return "text-muted-foreground";
    const percentage = (current / max) * 100;
    if (percentage >= 100) return "text-red-500";
    if (percentage >= 80) return "text-yellow-500";
    return "text-green-500";
  };

  if (isLoading) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <>
      <div className="p-8">
        <h1 className="text-3xl font-academy-bold mb-6">Trip Capacity Management</h1>

        <div className="grid gap-4">
          {trips.map((trip) => (
            <Card key={trip.id} className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{trip.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Departure: {new Date(trip.trip_start_date).toLocaleDateString()}
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      <span
                        className={`font-semibold ${getCapacityColor(
                          trip.confirmed_bookings,
                          trip.max_participants
                        )}`}
                      >
                        {trip.confirmed_bookings}
                        {trip.max_participants ? ` / ${trip.max_participants}` : " bookings"}
                      </span>
                    </div>

                    {trip.waitlist.length > 0 && (
                      <Badge variant="secondary">
                        {trip.waitlist.length} on waitlist
                      </Badge>
                    )}

                    {trip.max_participants &&
                      trip.confirmed_bookings >= trip.max_participants && (
                        <Badge variant="destructive">At Capacity</Badge>
                      )}
                  </div>
                </div>

                {trip.waitlist.length > 0 && (
                  <Button
                    onClick={() => {
                      setSelectedTrip(trip);
                      setShowWaitlist(true);
                    }}
                  >
                    Manage Waitlist
                  </Button>
                )}
              </div>

              {trip.max_participants && (
                <div className="mt-4">
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        trip.confirmed_bookings >= trip.max_participants
                          ? "bg-red-500"
                          : trip.confirmed_bookings >= trip.max_participants * 0.8
                          ? "bg-yellow-500"
                          : "bg-green-500"
                      }`}
                      style={{
                        width: `${Math.min(
                          (trip.confirmed_bookings / trip.max_participants) * 100,
                          100
                        )}%`,
                      }}
                    />
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={showWaitlist} onOpenChange={setShowWaitlist}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Waitlist - {selectedTrip?.title}</DialogTitle>
            <DialogDescription>
              Manage students on the waitlist for this trip
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3">
            {selectedTrip?.waitlist.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 border rounded"
              >
                <div>
                  <p className="font-medium">
                    #{item.waitlist_position} - {item.student?.first_name}{" "}
                    {item.student?.last_name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {item.student?.email}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Added: {new Date(item.waitlisted_at).toLocaleDateString()}
                  </p>
                </div>
                <Button
                  size="sm"
                  onClick={() =>
                    promoteFromWaitlist(item.id, selectedTrip.id)
                  }
                >
                  <ArrowUp className="w-4 h-4 mr-2" />
                  Promote
                </Button>
              </div>
            ))}

            {selectedTrip?.waitlist.length === 0 && (
              <p className="text-center text-muted-foreground py-8">
                No students on waitlist
              </p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TripCapacity;
