-- Add school column to trip_participants table
ALTER TABLE public.trip_participants 
ADD COLUMN school text;