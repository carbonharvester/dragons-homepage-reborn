
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { summerAbroad, educatorTrips } from '@/data/programsData';

interface WaitingListFormProps {
  children: React.ReactNode;
  className?: string;
}

const WaitingListForm = ({ children, className }: WaitingListFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedProgramType, setSelectedProgramType] = useState<string>('');
  const [selectedSpecificTrip, setSelectedSpecificTrip] = useState<string>('');
  const { toast } = useToast();
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://formspree.io/f/xnnvgglo', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        toast({
          title: "Welcome to our waiting list!",
          description: "Thank you for your interest. We'll contact you when applications open in September 2025.",
        });
        setIsOpen(false);
        (e.target as HTMLFormElement).reset();
        setSelectedProgramType('');
        setSelectedSpecificTrip('');
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getAvailableTrips = () => {
    switch (selectedProgramType) {
      case 'summer-abroad':
        return summerAbroad;
      case 'educator-trips':
        return educatorTrips;
      default:
        return [];
    }
  };

  const handleProgramTypeChange = (value: string) => {
    setSelectedProgramType(value);
    setSelectedSpecificTrip(''); // Reset specific trip when program type changes
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className={className}>
          {children}
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Join Our Waiting List</DialogTitle>
          <DialogDescription>
            We will be opening applications in September 2025. Be the first to find out when applications are available by joining our waiting list. We'll notify you as soon as applications open!
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name*</Label>
              <Input id="firstName" name="firstName" required />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name*</Label>
              <Input id="lastName" name="lastName" required />
            </div>
          </div>
          <div>
            <Label htmlFor="email">Email Address*</Label>
            <Input type="email" id="email" name="email" required />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input type="tel" id="phone" name="phone" />
          </div>
          <div>
            <Label htmlFor="programType">Program Type*</Label>
            <Select 
              name="programType" 
              value={selectedProgramType} 
              onValueChange={handleProgramTypeChange}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a program type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="summer-abroad">Summer Abroad</SelectItem>
                <SelectItem value="educator-trips">Educator Trips</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {selectedProgramType && (
            <div>
              <Label htmlFor="specificTrip">Specific Program*</Label>
              <Select 
                name="specificTrip" 
                value={selectedSpecificTrip} 
                onValueChange={setSelectedSpecificTrip}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a specific program" />
                </SelectTrigger>
                <SelectContent>
                  {getAvailableTrips().map((trip, index) => (
                    <SelectItem key={index} value={trip.title}>
                      {trip.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
          <div>
            <Label htmlFor="message">Additional Comments</Label>
            <Textarea 
              id="message" 
              name="message"
              placeholder="Tell us about your interests or any questions you have..."
              rows={3}
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-dragon hover:bg-dragon-dark text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Joining..." : "Join Waiting List"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WaitingListForm;
