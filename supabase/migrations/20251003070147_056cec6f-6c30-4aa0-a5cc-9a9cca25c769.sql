-- Add emergency contact fields to trip_participants table
ALTER TABLE public.trip_participants 
ADD COLUMN emergency_contact_name text,
ADD COLUMN emergency_contact_relationship text,
ADD COLUMN emergency_contact_phone text,
ADD COLUMN emergency_contact_email text;