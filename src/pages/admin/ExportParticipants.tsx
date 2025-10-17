import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Download, FileSpreadsheet } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const ExportParticipants = () => {
  const [trips, setTrips] = useState<any[]>([]);
  const [selectedTrip, setSelectedTrip] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [exporting, setExporting] = useState(false);

  useEffect(() => {
    loadTrips();
  }, []);

  const loadTrips = async () => {
    try {
      const { data, error } = await supabase
        .from("trips")
        .select("id, title, destination, trip_start_date")
        .order("trip_start_date", { ascending: false });

      if (error) throw error;
      setTrips(data || []);
    } catch (error: any) {
      console.error("Error loading trips:", error);
      toast.error("Failed to load trips");
    } finally {
      setIsLoading(false);
    }
  };

  const exportToCSV = async () => {
    if (!selectedTrip) {
      toast.error("Please select a trip");
      return;
    }

    setExporting(true);
    try {
      const { data, error } = await supabase
        .from("bookings")
        .select(`
          *,
          trip:trips(title, destination, trip_start_date, trip_end_date),
          booking_documents:booking_documents(document_type, status)
        `)
        .eq("trip_id", selectedTrip);

      if (error) throw error;

      // Prepare CSV data
      const headers = [
        "Booking ID",
        "Student First Name",
        "Student Last Name",
        "Date of Birth",
        "Gender",
        "Nationality",
        "Passport Number",
        "Passport Expiry",
        "Email",
        "Phone",
        "Status",
        "Payment Status",
        "Total Price (AED)",
        "Amount Paid (AED)",
        "Allergies",
        "Dietary Requirements",
        "Emergency Contact Name",
        "Emergency Contact Phone",
        "Documents Status",
        "Booked At",
      ];

      const rows = (data || []).map((booking) => {
        const docsApproved = booking.booking_documents?.filter(
          (d: any) => d.status === "approved"
        ).length;
        const totalDocs = booking.booking_documents?.length;

        return [
          booking.id,
          booking.student_first_name,
          booking.student_last_name,
          booking.student_date_of_birth || "",
          booking.student_gender || "",
          booking.passport_nationality || "",
          booking.passport_number || "",
          booking.passport_expiry_date || "",
          booking.emergency_contact_email || "",
          booking.emergency_contact_phone || "",
          booking.status,
          booking.payment_status,
          booking.total_price_aed,
          booking.amount_paid_aed,
          booking.allergies || "",
          booking.dietary_requirements || "",
          booking.emergency_contact_name || "",
          booking.emergency_contact_phone || "",
          `${docsApproved || 0}/${totalDocs || 0}`,
          new Date(booking.booked_at).toLocaleDateString(),
        ];
      });

      // Create CSV content
      const csvContent = [
        headers.join(","),
        ...rows.map((row) =>
          row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(",")
        ),
      ].join("\n");

      // Download CSV
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const link = document.createElement("a");
      const url = URL.createObjectURL(blob);
      const tripName = trips.find((t) => t.id === selectedTrip)?.title || "trip";
      link.setAttribute("href", url);
      link.setAttribute("download", `${tripName.replace(/\s+/g, "_")}_participants.csv`);
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast.success("Participant list exported successfully");
    } catch (error: any) {
      console.error("Error exporting:", error);
      toast.error("Failed to export participant list");
    } finally {
      setExporting(false);
    }
  };

  if (isLoading) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-academy-bold mb-6">Export Participants</h1>

      <Card className="p-6 max-w-2xl">
        <div className="space-y-4">
          <div>
            <Label>Select Trip</Label>
            <Select value={selectedTrip} onValueChange={setSelectedTrip}>
              <SelectTrigger>
                <SelectValue placeholder="Choose a trip" />
              </SelectTrigger>
              <SelectContent>
                {trips.map((trip) => (
                  <SelectItem key={trip.id} value={trip.id}>
                    {trip.title} - {trip.destination} (
                    {new Date(trip.trip_start_date).toLocaleDateString()})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button
            onClick={exportToCSV}
            disabled={!selectedTrip || exporting}
            className="w-full"
          >
            <Download className="w-4 h-4 mr-2" />
            {exporting ? "Exporting..." : "Export to CSV"}
          </Button>

          <div className="text-sm text-muted-foreground space-y-2">
            <p className="font-semibold flex items-center gap-2">
              <FileSpreadsheet className="w-4 h-4" />
              Export includes:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Student personal information</li>
              <li>Passport details</li>
              <li>Emergency contact information</li>
              <li>Medical information (allergies, dietary requirements)</li>
              <li>Booking and payment status</li>
              <li>Document approval status</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ExportParticipants;
