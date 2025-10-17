-- Add itinerary field to trips table
ALTER TABLE trips 
ADD COLUMN itinerary JSONB DEFAULT '[]'::jsonb;

-- Create trip_templates table for reusable templates
CREATE TABLE trip_templates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  destination TEXT NOT NULL,
  duration_days INTEGER NOT NULL,
  base_price_aed NUMERIC NOT NULL,
  age_min INTEGER,
  age_max INTEGER,
  max_participants INTEGER,
  inclusions TEXT[],
  exclusions TEXT[],
  itinerary JSONB DEFAULT '[]'::jsonb,
  created_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS on trip_templates
ALTER TABLE trip_templates ENABLE ROW LEVEL SECURITY;

-- Admins can view all templates
CREATE POLICY "Admins can view templates"
ON trip_templates FOR SELECT
USING (
  has_role(auth.uid(), 'super_admin') OR 
  has_role(auth.uid(), 'school_admin')
);

-- Admins can create templates
CREATE POLICY "Admins can create templates"
ON trip_templates FOR INSERT
WITH CHECK (
  has_role(auth.uid(), 'super_admin') OR 
  has_role(auth.uid(), 'school_admin')
);

-- Admins can update templates
CREATE POLICY "Admins can update templates"
ON trip_templates FOR UPDATE
USING (
  has_role(auth.uid(), 'super_admin') OR 
  has_role(auth.uid(), 'school_admin')
);

-- Admins can delete templates
CREATE POLICY "Admins can delete templates"
ON trip_templates FOR DELETE
USING (has_role(auth.uid(), 'super_admin'));

-- Add trigger for updated_at
CREATE TRIGGER update_trip_templates_updated_at
  BEFORE UPDATE ON trip_templates
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();