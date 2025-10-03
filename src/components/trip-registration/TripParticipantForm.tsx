import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Upload } from "lucide-react";

const mealCodes = [
  { value: "STND", label: "Standard Meal" },
  { value: "AVML", label: "Asian Vegetarian Meal" },
  { value: "BBML", label: "Baby Meal" },
  { value: "BLML", label: "Bland Meal" },
  { value: "CHML", label: "Child Meal" },
  { value: "DBML", label: "Diabetic Meal" },
  { value: "FPML", label: "Fruit Platter Meal" },
  { value: "GFML", label: "Gluten Intolerant Meal" },
  { value: "HNML", label: "Hindu Non-Vegetarian Meal" },
  { value: "KSML", label: "Kosher Meal" },
  { value: "LCML", label: "Low Calorie Meal" },
  { value: "LFML", label: "Low Fat Meal" },
  { value: "LSML", label: "Low Salt Meal" },
  { value: "MOML", label: "Muslim Meal" },
  { value: "NLML", label: "Non Lactose Meal" },
  { value: "ORML", label: "Oriental Meal" },
  { value: "RVML", label: "Raw Vegetarian Meal" },
  { value: "SFML", label: "Seafood Meal" },
  { value: "VGML", label: "Vegan Meal" },
  { value: "VJML", label: "Vegetarian Jain Meal" },
  { value: "VLML", label: "Vegetarian Lacto-Ovo Meal" }
];

const TripParticipantForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [passportFile, setPassportFile] = useState<File | null>(null);
  
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    dateOfBirth: '',
    school: '',
    trip: '',
    nationality: '',
    passportNumber: '',
    passportExpiryDate: '',
    allergies: '',
    dietaryRequirements: '',
    mealCode: '',
    emergencyContactName: '',
    emergencyContactRelationship: '',
    emergencyContactPhone: '',
    emergencyContactEmail: '',
    mediaConsent: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPassportFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let passportImageUrl = null;

      // Upload passport image if provided
      if (passportFile) {
        const fileExt = passportFile.name.split('.').pop();
        const fileName = `${Date.now()}-${formData.firstName}-${formData.lastName}.${fileExt}`;
        
        const { error: uploadError } = await supabase.storage
          .from('passports')
          .upload(fileName, passportFile);

        if (uploadError) {
          throw uploadError;
        }

        const { data: { publicUrl } } = supabase.storage
          .from('passports')
          .getPublicUrl(fileName);
        
        passportImageUrl = publicUrl;
      }

      // Insert participant data
      const { error: insertError } = await (supabase as any)
        .from('trip_participants')
        .insert({
          first_name: formData.firstName,
          middle_name: formData.middleName || null,
          last_name: formData.lastName,
          date_of_birth: formData.dateOfBirth,
          school: formData.school,
          trip: formData.trip,
          nationality: formData.nationality,
          passport_number: formData.passportNumber,
          passport_expiry_date: formData.passportExpiryDate,
          allergies: formData.allergies || null,
          dietary_requirements: formData.dietaryRequirements || null,
          meal_code: formData.mealCode || null,
          emergency_contact_name: formData.emergencyContactName || null,
          emergency_contact_relationship: formData.emergencyContactRelationship || null,
          emergency_contact_phone: formData.emergencyContactPhone || null,
          emergency_contact_email: formData.emergencyContactEmail || null,
          passport_image_url: passportImageUrl,
          media_consent: formData.mediaConsent
        });

      if (insertError) {
        throw insertError;
      }

      toast({
        title: "Success!",
        description: "Trip participant information submitted successfully."
      });

      // Reset form
      setFormData({
        firstName: '',
        middleName: '',
        lastName: '',
        dateOfBirth: '',
        school: '',
        trip: '',
        nationality: '',
        passportNumber: '',
        passportExpiryDate: '',
        allergies: '',
        dietaryRequirements: '',
        mealCode: '',
        emergencyContactName: '',
        emergencyContactRelationship: '',
        emergencyContactPhone: '',
        emergencyContactEmail: '',
        mediaConsent: false
      });
      setPassportFile(null);

    } catch (error: any) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission Failed",
        description: error.message || "An error occurred while submitting the form.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dragon-dark to-dragon py-12 px-4">
      <div className="container-wide max-w-3xl mx-auto">
        <Card className="border-dragon-yellow/20">
          <CardHeader className="space-y-4">
            <CardTitle className="text-3xl font-academy text-dragon">
              Trip Participant Registration
            </CardTitle>
            <CardDescription className="text-base">
              Please complete this form for each child attending the trip. All information is stored securely and will only be accessed by our team.
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-dragon">Personal Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      placeholder="Enter first name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="middleName">Middle Name</Label>
                    <Input
                      id="middleName"
                      value={formData.middleName}
                      onChange={(e) => handleInputChange('middleName', e.target.value)}
                      placeholder="Enter middle name (optional)"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      required
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      placeholder="Enter last name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      required
                      value={formData.dateOfBirth}
                      onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="school">School *</Label>
                  <Input
                    id="school"
                    required
                    value={formData.school}
                    onChange={(e) => handleInputChange('school', e.target.value)}
                    placeholder="Enter school name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="trip">Trip *</Label>
                  <Select value={formData.trip} onValueChange={(value) => handleInputChange('trip', value)} required>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select a trip" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border border-border z-50">
                      <SelectItem value="Fairgreen Kenya 2025">Fairgreen Kenya 2025</SelectItem>
                      <SelectItem value="BISJ Kenya 2025">BISJ Kenya 2025</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Passport Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-dragon">Passport Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nationality">Nationality *</Label>
                    <Input
                      id="nationality"
                      required
                      value={formData.nationality}
                      onChange={(e) => handleInputChange('nationality', e.target.value)}
                      placeholder="Enter nationality"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="passportNumber">Passport Number *</Label>
                    <Input
                      id="passportNumber"
                      required
                      value={formData.passportNumber}
                      onChange={(e) => handleInputChange('passportNumber', e.target.value)}
                      placeholder="Enter passport number"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="passportExpiryDate">Passport Expiry Date *</Label>
                    <Input
                      id="passportExpiryDate"
                      type="date"
                      required
                      value={formData.passportExpiryDate}
                      onChange={(e) => handleInputChange('passportExpiryDate', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="passportImage">Passport Image Upload</Label>
                    <div className="relative">
                      <Input
                        id="passportImage"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="cursor-pointer"
                      />
                      <Upload className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                    </div>
                    {passportFile && (
                      <p className="text-sm text-muted-foreground">{passportFile.name}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Medical & Dietary Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-dragon">Medical & Dietary Information</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="allergies">Allergies</Label>
                  <Textarea
                    id="allergies"
                    value={formData.allergies}
                    onChange={(e) => handleInputChange('allergies', e.target.value)}
                    placeholder="Please list any allergies (optional)"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dietaryRequirements">Dietary Requirements</Label>
                  <Textarea
                    id="dietaryRequirements"
                    value={formData.dietaryRequirements}
                    onChange={(e) => handleInputChange('dietaryRequirements', e.target.value)}
                    placeholder="Please describe any dietary requirements (optional)"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mealCode">Special Meal Code (if applicable)</Label>
                  <Select value={formData.mealCode} onValueChange={(value) => handleInputChange('mealCode', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a meal code (optional)" />
                    </SelectTrigger>
                    <SelectContent>
                      {mealCodes.map((meal) => (
                        <SelectItem key={meal.value} value={meal.value}>
                          {meal.value} - {meal.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">
                    For more information about meal codes, visit{" "}
                    <a 
                      href="https://www.emirates.com/ae/english/before-you-fly/travel/dietary-requirements/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-dragon hover:underline"
                    >
                      Emirates Dietary Requirements
                    </a>
                  </p>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="space-y-4 pt-6 border-t border-border">
                <h3 className="text-xl font-semibold text-dragon">Emergency Contact</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="emergencyContactName">Contact Name *</Label>
                    <Input
                      id="emergencyContactName"
                      required
                      value={formData.emergencyContactName}
                      onChange={(e) => handleInputChange('emergencyContactName', e.target.value)}
                      placeholder="Enter emergency contact name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="emergencyContactRelationship">Relationship *</Label>
                    <Input
                      id="emergencyContactRelationship"
                      required
                      value={formData.emergencyContactRelationship}
                      onChange={(e) => handleInputChange('emergencyContactRelationship', e.target.value)}
                      placeholder="e.g., Parent, Guardian"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="emergencyContactPhone">Phone Number *</Label>
                    <Input
                      id="emergencyContactPhone"
                      type="tel"
                      required
                      value={formData.emergencyContactPhone}
                      onChange={(e) => handleInputChange('emergencyContactPhone', e.target.value)}
                      placeholder="Enter phone number"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="emergencyContactEmail">Email Address *</Label>
                    <Input
                      id="emergencyContactEmail"
                      type="email"
                      required
                      value={formData.emergencyContactEmail}
                      onChange={(e) => handleInputChange('emergencyContactEmail', e.target.value)}
                      placeholder="Enter email address"
                    />
                  </div>
                </div>
              </div>

              {/* Media Consent */}
              <div className="space-y-4 pt-6 border-t border-border">
                <div className="flex items-start space-x-3">
                  <Checkbox 
                    id="mediaConsent"
                    checked={formData.mediaConsent}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, mediaConsent: checked === true }))}
                    required
                  />
                  <div className="space-y-1">
                    <Label 
                      htmlFor="mediaConsent" 
                      className="text-base font-medium cursor-pointer"
                    >
                      I consent to photos and videos being taken during the trip *
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      <Link 
                        to="/media-consent-policy" 
                        target="_blank"
                        className="text-dragon hover:underline"
                      >
                        Learn more about our photo and video policy
                      </Link>
                      {" "}- Photos and videos will only be used for marketing and promotion of Kapes Adventures trips.
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-6">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-dragon-yellow hover:bg-dragon-yellow/90 text-dragon-dark px-8 py-6 text-lg"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TripParticipantForm;
