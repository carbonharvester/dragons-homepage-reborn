-- Add waitlist support to student_interests
ALTER TABLE public.student_interests 
  ADD COLUMN IF NOT EXISTS waitlist_position INTEGER,
  ADD COLUMN IF NOT EXISTS waitlisted_at TIMESTAMP WITH TIME ZONE;

-- Create attendance tracking table
CREATE TABLE IF NOT EXISTS public.trip_attendance (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id UUID NOT NULL REFERENCES bookings(id) ON DELETE CASCADE,
  trip_id UUID NOT NULL REFERENCES trips(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('present', 'absent', 'excused', 'late')),
  notes TEXT,
  marked_by UUID REFERENCES auth.users(id),
  marked_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(booking_id, date)
);

-- Enable RLS on trip_attendance
ALTER TABLE public.trip_attendance ENABLE ROW LEVEL SECURITY;

-- RLS Policies for trip_attendance
CREATE POLICY "Admins can view all attendance"
  ON public.trip_attendance
  FOR SELECT
  USING (
    has_role(auth.uid(), 'super_admin') OR 
    has_role(auth.uid(), 'school_admin')
  );

CREATE POLICY "Admins can manage attendance"
  ON public.trip_attendance
  FOR ALL
  USING (
    has_role(auth.uid(), 'super_admin') OR 
    has_role(auth.uid(), 'school_admin')
  );

-- Create analytics view for reporting
CREATE OR REPLACE VIEW public.trip_analytics AS
SELECT 
  t.id as trip_id,
  t.title,
  t.destination,
  t.trip_start_date,
  t.trip_end_date,
  t.status,
  t.max_participants,
  COUNT(DISTINCT b.id) as total_bookings,
  COUNT(DISTINCT CASE WHEN b.status = 'confirmed' THEN b.id END) as confirmed_bookings,
  COUNT(DISTINCT CASE WHEN b.payment_status = 'paid' THEN b.id END) as paid_bookings,
  SUM(b.total_price_aed) as total_revenue_aed,
  SUM(b.amount_paid_aed) as collected_revenue_aed,
  COUNT(DISTINCT si.id) as total_interests,
  COUNT(DISTINCT CASE WHEN si.waitlist_position IS NOT NULL THEN si.id END) as waitlist_count,
  COUNT(DISTINCT bd.id) as documents_submitted,
  COUNT(DISTINCT CASE WHEN bd.status = 'approved' THEN bd.id END) as documents_approved
FROM trips t
LEFT JOIN bookings b ON t.id = b.trip_id
LEFT JOIN student_interests si ON t.id = si.trip_id
LEFT JOIN booking_documents bd ON b.id = bd.booking_id
GROUP BY t.id, t.title, t.destination, t.trip_start_date, t.trip_end_date, t.status, t.max_participants;

-- Grant access to analytics view
GRANT SELECT ON public.trip_analytics TO authenticated;

-- Create function to check trip capacity and manage waitlist
CREATE OR REPLACE FUNCTION public.check_trip_capacity()
RETURNS TRIGGER AS $$
DECLARE
  current_bookings INTEGER;
  max_capacity INTEGER;
  next_position INTEGER;
BEGIN
  -- Get trip capacity
  SELECT max_participants INTO max_capacity
  FROM trips
  WHERE id = NEW.trip_id;

  -- Count confirmed bookings
  SELECT COUNT(*) INTO current_bookings
  FROM bookings
  WHERE trip_id = NEW.trip_id 
    AND status IN ('confirmed', 'pending');

  -- If at capacity, add to waitlist
  IF max_capacity IS NOT NULL AND current_bookings >= max_capacity THEN
    -- Get next waitlist position
    SELECT COALESCE(MAX(waitlist_position), 0) + 1 INTO next_position
    FROM student_interests
    WHERE trip_id = NEW.trip_id;

    NEW.waitlist_position := next_position;
    NEW.waitlisted_at := now();
    NEW.status := 'waitlisted';
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Trigger to check capacity on interest registration
CREATE TRIGGER check_capacity_on_interest
  BEFORE INSERT ON public.student_interests
  FOR EACH ROW
  EXECUTE FUNCTION public.check_trip_capacity();

-- Add trigger for attendance updated_at
CREATE TRIGGER update_trip_attendance_updated_at
  BEFORE UPDATE ON public.trip_attendance
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();