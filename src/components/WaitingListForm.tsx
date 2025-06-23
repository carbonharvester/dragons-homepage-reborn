
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface WaitingListFormProps {
  children: React.ReactNode;
  className?: string;
}

const WaitingListForm = ({ children, className }: WaitingListFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
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
            <Label htmlFor="program">Interested Program(s)</Label>
            <Input id="program" name="program" placeholder="e.g., Capturing Kenya, Feeding the Future" />
          </div>
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
