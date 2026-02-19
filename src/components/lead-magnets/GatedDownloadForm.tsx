import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Download, CheckCircle2, Loader2 } from 'lucide-react';

interface GatedDownloadFormProps {
  leadMagnetType: string;
  title: string;
  description: string;
  buttonText: string;
  onDownload: () => void;
  children?: React.ReactNode;
}

const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbw_WM228IyN2NQde40VL_vl0Ue5d5fwJ8-2Mv9dc-RFdyWCa6ojzphDtnQN4WoME3UgVw/exec';

const GatedDownloadForm = ({
  leadMagnetType,
  title,
  description,
  buttonText,
  onDownload,
  children,
}: GatedDownloadFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    school: '',
    country: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.role || !formData.school || !formData.country) {
      toast({
        title: 'Please fill in all fields',
        variant: 'destructive',
      });
      return;
    }

    setStatus('submitting');

    try {
      const payload = {
        Name: formData.name,
        Email: formData.email,
        'Role': formData.role,
        School: formData.school,
        Country: formData.country,
        'Lead Magnet': leadMagnetType,
        Timestamp: new Date().toISOString(),
      };

      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        body: 'data=' + encodeURIComponent(JSON.stringify(payload)),
        mode: 'no-cors',
      });

      setStatus('success');
      toast({
        title: 'Success!',
        description: 'Your download is ready.',
      });
    } catch {
      setStatus('error');
      toast({
        title: 'Something went wrong',
        description: 'Please try again or contact us directly.',
        variant: 'destructive',
      });
      setStatus('idle');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white rounded-2xl p-8 md:p-10 shadow-lg text-center max-w-lg mx-auto"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-academy text-kapes-charcoal mb-3">
          Your download is ready
        </h3>
        <p className="text-dragon-gray mb-6">
          Click the button below to download. We've also sent a copy to {formData.email}.
        </p>
        <Button
          className="btn-action text-lg h-14 px-10"
          onClick={onDownload}
        >
          <Download className="mr-2 w-5 h-5" />
          {buttonText}
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      {children && (
        <div className="space-y-6">
          {children}
        </div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={children ? '' : 'lg:col-span-2 max-w-lg mx-auto w-full'}
      >
        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
          <h3 className="text-2xl font-academy text-kapes-charcoal mb-2">
            {title}
          </h3>
          <p className="text-dragon-gray mb-6">{description}</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-sm font-medium text-kapes-charcoal">
                Full Name *
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="mt-1"
                required
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-sm font-medium text-kapes-charcoal">
                Work Email *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@school.edu"
                className="mt-1"
                required
              />
            </div>

            <div>
              <Label htmlFor="role" className="text-sm font-medium text-kapes-charcoal">
                Your Role *
              </Label>
              <Input
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                placeholder="Principal, Trip Coordinator, IB Coordinator..."
                className="mt-1"
                required
              />
            </div>

            <div>
              <Label htmlFor="school" className="text-sm font-medium text-kapes-charcoal">
                School Name *
              </Label>
              <Input
                id="school"
                name="school"
                value={formData.school}
                onChange={handleChange}
                placeholder="Your school name"
                className="mt-1"
                required
              />
            </div>

            <div>
              <Label htmlFor="country" className="text-sm font-medium text-kapes-charcoal">
                Country *
              </Label>
              <Input
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="e.g. UAE, United Kingdom, Singapore"
                className="mt-1"
                required
              />
            </div>

            <Button
              type="submit"
              className="btn-action w-full text-lg h-12 mt-2"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Download className="mr-2 w-5 h-5" />
                  {buttonText}
                </>
              )}
            </Button>

            <p className="text-xs text-dragon-gray text-center mt-3">
              We respect your privacy. No spam. Unsubscribe anytime.
            </p>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default GatedDownloadForm;
