import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { CheckCircle, XCircle, Clock, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface Participant {
  booking_id: string;
  student_name: string;
  attendance_status?: string;
}

const TripAttendance = () => {
  const { tripId } = useParams();
  const [trip, setTrip] = useState<any>(null);
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (tripId) {
      loadTripAndParticipants();
    }
  }, [tripId, selectedDate]);

  const loadTripAndParticipants = async () => {
    try {
      const { data: tripData, error: tripError } = await supabase
        .from("trips")
        .select("*")
        .eq("id", tripId)
        .single();

      if (tripError) throw tripError;
      setTrip(tripData);

      // Load bookings
      const { data: bookingsData, error: bookingsError } = await supabase
        .from("bookings")
        .select("id, student_first_name, student_last_name")
        .eq("trip_id", tripId)
        .eq("status", "confirmed");

      if (bookingsError) throw bookingsError;

      // Load attendance for selected date
      const { data: attendanceData } = await supabase
        .from("trip_attendance")
        .select("*")
        .eq("trip_id", tripId)
        .eq("date", selectedDate);

      // Merge data
      const participantsWithAttendance = (bookingsData || []).map((booking) => {
        const attendance = attendanceData?.find(
          (a) => a.booking_id === booking.id
        );
        return {
          booking_id: booking.id,
          student_name: `${booking.student_first_name} ${booking.student_last_name}`,
          attendance_status: attendance?.status,
        };
      });

      setParticipants(participantsWithAttendance);
    } catch (error: any) {
      console.error("Error loading data:", error);
      toast.error("Failed to load attendance data");
    } finally {
      setIsLoading(false);
    }
  };

  const markAttendance = async (bookingId: string, status: string) => {
    try {
      const { data: { session } } = await supabase.auth.getSession();

      const { error } = await supabase.from("trip_attendance").upsert(
        {
          booking_id: bookingId,
          trip_id: tripId,
          date: selectedDate,
          status: status,
          marked_by: session?.user.id,
          marked_at: new Date().toISOString(),
        },
        {
          onConflict: "booking_id,date",
        }
      );

      if (error) throw error;

      toast.success("Attendance marked");
      loadTripAndParticipants();
    } catch (error: any) {
      console.error("Error marking attendance:", error);
      toast.error("Failed to mark attendance");
    }
  };

  const getStatusIcon = (status?: string) => {
    switch (status) {
      case "present":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "absent":
        return <XCircle className="w-5 h-5 text-red-500" />;
      case "late":
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case "excused":
        return <AlertCircle className="w-5 h-5 text-blue-500" />;
      default:
        return <div className="w-5 h-5 rounded-full border-2 border-muted" />;
    }
  };

  const getStatusBadge = (status?: string) => {
    if (!status) return <Badge variant="secondary">Not Marked</Badge>;
    
    const variants: Record<string, any> = {
      present: "default",
      absent: "destructive",
      late: "secondary",
      excused: "secondary",
    };

    return (
      <Badge variant={variants[status] || "secondary"}>
        {status.toUpperCase()}
      </Badge>
    );
  };

  if (isLoading) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-academy-bold mb-2">Attendance Tracking</h1>
        <p className="text-muted-foreground">{trip?.title}</p>
      </div>

      <Card className="p-6 mb-6">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <Label>Date</Label>
            <input
              type="date"
              className="w-full px-3 py-2 border rounded"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              min={trip?.trip_start_date}
              max={trip?.trip_end_date}
            />
          </div>
          <div className="flex gap-2 pt-6">
            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                participants.forEach((p) => {
                  if (!p.attendance_status) {
                    markAttendance(p.booking_id, "present");
                  }
                });
              }}
            >
              Mark All Present
            </Button>
          </div>
        </div>
      </Card>

      <div className="space-y-3">
        {participants.map((participant) => (
          <Card key={participant.booking_id} className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {getStatusIcon(participant.attendance_status)}
                <div>
                  <p className="font-medium">{participant.student_name}</p>
                  {getStatusBadge(participant.attendance_status)}
                </div>
              </div>

              <Select
                value={participant.attendance_status || ""}
                onValueChange={(value) =>
                  markAttendance(participant.booking_id, value)
                }
              >
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Mark status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="present">Present</SelectItem>
                  <SelectItem value="absent">Absent</SelectItem>
                  <SelectItem value="late">Late</SelectItem>
                  <SelectItem value="excused">Excused</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </Card>
        ))}

        {participants.length === 0 && (
          <Card className="p-8 text-center text-muted-foreground">
            No confirmed participants for this trip
          </Card>
        )}
      </div>
    </div>
  );
};

export default TripAttendance;
