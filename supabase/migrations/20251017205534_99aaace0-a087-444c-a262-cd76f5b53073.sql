-- Create storage buckets for documents
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES 
  ('passports', 'passports', false, 20971520, ARRAY['image/jpeg', 'image/png', 'image/jpg', 'application/pdf']),
  ('medical-forms', 'medical-forms', false, 20971520, ARRAY['application/pdf', 'image/jpeg', 'image/png', 'image/jpg']),
  ('other-documents', 'other-documents', false, 20971520, ARRAY['application/pdf', 'image/jpeg', 'image/png', 'image/jpg', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'])
ON CONFLICT (id) DO NOTHING;

-- Create documents tracking table
CREATE TABLE IF NOT EXISTS public.booking_documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id UUID NOT NULL REFERENCES bookings(id) ON DELETE CASCADE,
  document_type TEXT NOT NULL CHECK (document_type IN ('passport', 'medical_form', 'visa', 'insurance', 'other')),
  file_path TEXT NOT NULL,
  file_name TEXT NOT NULL,
  file_size INTEGER NOT NULL,
  mime_type TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'resubmit_required')),
  reviewed_by UUID REFERENCES auth.users(id),
  reviewed_at TIMESTAMP WITH TIME ZONE,
  rejection_reason TEXT,
  notes TEXT,
  uploaded_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on booking_documents
ALTER TABLE public.booking_documents ENABLE ROW LEVEL SECURITY;

-- RLS Policies for booking_documents
CREATE POLICY "Parents can view own booking documents"
  ON public.booking_documents
  FOR SELECT
  USING (
    booking_id IN (
      SELECT id FROM bookings 
      WHERE parent_id IN (
        SELECT id FROM parents WHERE auth_user_id = auth.uid()
      )
    )
  );

CREATE POLICY "Parents can upload documents for own bookings"
  ON public.booking_documents
  FOR INSERT
  WITH CHECK (
    booking_id IN (
      SELECT id FROM bookings 
      WHERE parent_id IN (
        SELECT id FROM parents WHERE auth_user_id = auth.uid()
      )
    )
  );

CREATE POLICY "Parents can update own booking documents"
  ON public.booking_documents
  FOR UPDATE
  USING (
    booking_id IN (
      SELECT id FROM bookings 
      WHERE parent_id IN (
        SELECT id FROM parents WHERE auth_user_id = auth.uid()
      )
    )
  );

CREATE POLICY "Admins can view all booking documents"
  ON public.booking_documents
  FOR SELECT
  USING (
    has_role(auth.uid(), 'super_admin') OR 
    has_role(auth.uid(), 'school_admin')
  );

CREATE POLICY "Admins can manage all booking documents"
  ON public.booking_documents
  FOR ALL
  USING (
    has_role(auth.uid(), 'super_admin') OR 
    has_role(auth.uid(), 'school_admin')
  );

-- Storage RLS policies for passports bucket
CREATE POLICY "Parents can upload passports for own bookings"
  ON storage.objects
  FOR INSERT
  WITH CHECK (
    bucket_id = 'passports' AND
    auth.uid() IN (
      SELECT p.auth_user_id FROM parents p
      JOIN bookings b ON b.parent_id = p.id
      WHERE (storage.foldername(name))[1] = b.id::text
    )
  );

CREATE POLICY "Parents can view own booking passports"
  ON storage.objects
  FOR SELECT
  USING (
    bucket_id = 'passports' AND
    auth.uid() IN (
      SELECT p.auth_user_id FROM parents p
      JOIN bookings b ON b.parent_id = p.id
      WHERE (storage.foldername(name))[1] = b.id::text
    )
  );

CREATE POLICY "Admins can view all passports"
  ON storage.objects
  FOR SELECT
  USING (
    bucket_id = 'passports' AND
    (has_role(auth.uid(), 'super_admin') OR has_role(auth.uid(), 'school_admin'))
  );

-- Storage RLS policies for medical-forms bucket
CREATE POLICY "Parents can upload medical forms for own bookings"
  ON storage.objects
  FOR INSERT
  WITH CHECK (
    bucket_id = 'medical-forms' AND
    auth.uid() IN (
      SELECT p.auth_user_id FROM parents p
      JOIN bookings b ON b.parent_id = p.id
      WHERE (storage.foldername(name))[1] = b.id::text
    )
  );

CREATE POLICY "Parents can view own booking medical forms"
  ON storage.objects
  FOR SELECT
  USING (
    bucket_id = 'medical-forms' AND
    auth.uid() IN (
      SELECT p.auth_user_id FROM parents p
      JOIN bookings b ON b.parent_id = p.id
      WHERE (storage.foldername(name))[1] = b.id::text
    )
  );

CREATE POLICY "Admins can view all medical forms"
  ON storage.objects
  FOR SELECT
  USING (
    bucket_id = 'medical-forms' AND
    (has_role(auth.uid(), 'super_admin') OR has_role(auth.uid(), 'school_admin'))
  );

-- Storage RLS policies for other-documents bucket
CREATE POLICY "Parents can upload other documents for own bookings"
  ON storage.objects
  FOR INSERT
  WITH CHECK (
    bucket_id = 'other-documents' AND
    auth.uid() IN (
      SELECT p.auth_user_id FROM parents p
      JOIN bookings b ON b.parent_id = p.id
      WHERE (storage.foldername(name))[1] = b.id::text
    )
  );

CREATE POLICY "Parents can view own booking other documents"
  ON storage.objects
  FOR SELECT
  USING (
    bucket_id = 'other-documents' AND
    auth.uid() IN (
      SELECT p.auth_user_id FROM parents p
      JOIN bookings b ON b.parent_id = p.id
      WHERE (storage.foldername(name))[1] = b.id::text
    )
  );

CREATE POLICY "Admins can view all other documents"
  ON storage.objects
  FOR SELECT
  USING (
    bucket_id = 'other-documents' AND
    (has_role(auth.uid(), 'super_admin') OR has_role(auth.uid(), 'school_admin'))
  );

-- Trigger to update updated_at
CREATE TRIGGER update_booking_documents_updated_at
  BEFORE UPDATE ON public.booking_documents
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();