import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const TripParticipantForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [mediaConsent, setMediaConsent] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [interest, setInterest] = useState<any>(null);
  const [trip, setTrip] = useState<any>(null);

  const interestId = searchParams.get("interest");

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: "",
    nationality: "",
    passportNumber: "",
    passportExpiryDate: "",
    school: "",
    trip: "",
    allergies: "",
    dietaryRequirements: "",
    mealCode: "",
    emergencyContactName: "",
    emergencyContactRelationship: "",
    emergencyContactPhone: "",
    emergencyContactEmail: "",
    gender: "",
  });

  useEffect(() => {
    if (interestId) {
      loadInterestData();
    }
  }, [interestId]);

  const loadInterestData = async () => {
    try {
      const { data, error } = await supabase
        .from("student_interests")
        .select(`
          *,
          student:students(*,school:schools(name)),
          trip:trips(*)
        `)
        .eq("id", interestId)
        .single();

      if (error) throw error;

      setInterest(data);
      setTrip(data.trip);
      setFormData(prev => ({
        ...prev,
        firstName: data.student.first_name,
        lastName: data.student.last_name,
        school: data.student.school.name,
        trip: data.trip.title,
      }));
    } catch (error: any) {
      toast.error("Failed to load booking details");
      console.error(error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!mediaConsent) {
      toast.error("Please provide media consent to continue");
      return;
    }

    if (!termsAccepted) {
      toast.error("Please accept the terms and conditions to continue");
      return;
    }

    setIsLoading(true);

    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        toast.error("Please log in to continue");
        navigate("/student/login");
        return;
      }

      // Generate booking reference
      const bookingReference = `KA${Date.now().toString().slice(-8)}`;

      const { error: insertError } = await supabase.from("trip_participants").insert({
        first_name: formData.firstName,
        middle_name: formData.middleName || null,
        last_name: formData.lastName,
        date_of_birth: formData.dateOfBirth,
        nationality: formData.nationality,
        passport_number: formData.passportNumber,
        passport_expiry_date: formData.passportExpiryDate,
        allergies: formData.allergies || null,
        dietary_requirements: formData.dietaryRequirements || null,
        meal_code: formData.mealCode || null,
        emergency_contact_name: formData.emergencyContactName,
        emergency_contact_relationship: formData.emergencyContactRelationship,
        emergency_contact_phone: formData.emergencyContactPhone,
        emergency_contact_email: formData.emergencyContactEmail || null,
        gender: formData.gender,
        school: formData.school,
        trip: formData.trip,
        media_consent: mediaConsent,
        user_id: session.user.id
      });

      if (insertError) throw insertError;

      // Get parent details for email
      const { data: parentData } = await supabase
        .from("parents")
        .select("first_name, last_name, email")
        .eq("auth_user_id", session.user.id)
        .single();

      if (parentData && trip) {
        // Send booking confirmation email
        try {
          await supabase.functions.invoke("send-booking-confirmation", {
            body: {
              parentEmail: parentData.email,
              parentName: `${parentData.first_name} ${parentData.last_name}`,
              childName: `${formData.firstName} ${formData.lastName}`,
              tripName: trip.title,
              tripDates: `${trip.start_date} to ${trip.end_date}`,
              bookingReference: bookingReference,
            },
          });
        } catch (emailError) {
          console.error("Failed to send confirmation email:", emailError);
          // Don't block the registration if email fails
        }
      }

      toast.success("Registration submitted successfully! Check your email for confirmation.");
      navigate("/student/dashboard");
    } catch (error: any) {
      toast.error("Failed to submit registration");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <Card className="p-8">
            <h1 className="text-3xl font-academy-bold mb-2 text-center">Complete Trip Booking</h1>
            {trip && (
              <p className="text-center text-muted-foreground mb-6">
                {trip.title} - {trip.destination}
              </p>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Personal Information</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>First Name *</Label>
                    <Input
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label>Middle Name</Label>
                    <Input
                      value={formData.middleName}
                      onChange={(e) => setFormData({ ...formData, middleName: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Last Name *</Label>
                    <Input
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label>Date of Birth *</Label>
                    <Input
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label>Gender *</Label>
                  <Select value={formData.gender} onValueChange={(value) => setFormData({ ...formData, gender: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Passport Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Passport Information</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Nationality *</Label>
                    <Input
                      value={formData.nationality}
                      onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label>Passport Number *</Label>
                    <Input
                      value={formData.passportNumber}
                      onChange={(e) => setFormData({ ...formData, passportNumber: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label>Passport Expiry Date *</Label>
                  <Input
                    type="date"
                    value={formData.passportExpiryDate}
                    onChange={(e) => setFormData({ ...formData, passportExpiryDate: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Medical & Dietary Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Medical & Dietary Information</h3>
                
                <div>
                  <Label>Allergies</Label>
                  <Textarea
                    value={formData.allergies}
                    onChange={(e) => setFormData({ ...formData, allergies: e.target.value })}
                    placeholder="Please list any allergies"
                    rows={3}
                  />
                </div>

                <div>
                  <Label>Dietary Requirements</Label>
                  <Textarea
                    value={formData.dietaryRequirements}
                    onChange={(e) => setFormData({ ...formData, dietaryRequirements: e.target.value })}
                    placeholder="Please describe any dietary requirements"
                    rows={3}
                  />
                </div>

                <div>
                  <Label>Special Meal Code (if applicable)</Label>
                  <Input
                    value={formData.mealCode}
                    onChange={(e) => setFormData({ ...formData, mealCode: e.target.value })}
                    placeholder="e.g., VGML, KSML"
                  />
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Emergency Contact</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Name *</Label>
                    <Input
                      value={formData.emergencyContactName}
                      onChange={(e) => setFormData({ ...formData, emergencyContactName: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label>Relationship *</Label>
                    <Input
                      value={formData.emergencyContactRelationship}
                      onChange={(e) => setFormData({ ...formData, emergencyContactRelationship: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Phone *</Label>
                    <Input
                      type="tel"
                      value={formData.emergencyContactPhone}
                      onChange={(e) => setFormData({ ...formData, emergencyContactPhone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label>Email</Label>
                    <Input
                      type="email"
                      value={formData.emergencyContactEmail}
                      onChange={(e) => setFormData({ ...formData, emergencyContactEmail: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* Consent & Terms */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="media-consent"
                    checked={mediaConsent}
                    onCheckedChange={(checked) => setMediaConsent(checked as boolean)}
                  />
                  <label
                    htmlFor="media-consent"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I consent to photos and videos being taken during the trip for promotional purposes
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={termsAccepted}
                    onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I accept the{" "}
                    <button
                      type="button"
                      onClick={() => setShowTerms(true)}
                      className="text-primary underline"
                    >
                      terms and conditions
                    </button>
                  </label>
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Submitting..." : "Proceed to Payment"}
              </Button>
            </form>
          </Card>
        </div>
      </div>

      <Dialog open={showTerms} onOpenChange={setShowTerms}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Terms and Conditions</DialogTitle>
            <DialogDescription>
              Please read and accept the following terms and conditions
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-sm">
            <section>
              <h3 className="font-semibold mb-2">1. Booking and Payment</h3>
              <p>A deposit is required to confirm your booking. Full payment must be received before the trip departure date.</p>
            </section>
            <section>
              <h3 className="font-semibold mb-2">2. Cancellation Policy</h3>
              <p>Cancellations made more than 60 days before departure: 50% refund. Cancellations made less than 60 days before departure: no refund.</p>
            </section>
            <section>
              <h3 className="font-semibold mb-2">3. Travel Documents</h3>
              <p>Participants are responsible for ensuring all travel documents (passport, visas) are valid and up to date.</p>
            </section>
            <section>
              <h3 className="font-semibold mb-2">4. Health and Safety</h3>
              <p>Participants must disclose any medical conditions or dietary requirements. Kapes Adventures reserves the right to refuse participation if health concerns pose a risk.</p>
            </section>
            <section>
              <h3 className="font-semibold mb-2">5. Behavior and Conduct</h3>
              <p>Participants are expected to behave respectfully. Kapes Adventures reserves the right to send home any participant whose behavior is deemed inappropriate.</p>
            </section>
            <section>
              <h3 className="font-semibold mb-2">6. Liability</h3>
              <p>Kapes Adventures is not liable for loss, damage, or injury during the trip, except where caused by our negligence.</p>
            </section>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TripParticipantForm;
