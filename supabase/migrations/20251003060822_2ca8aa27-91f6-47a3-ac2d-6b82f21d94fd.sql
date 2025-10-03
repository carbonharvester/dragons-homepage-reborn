-- Add media_consent column to trip_participants table
ALTER TABLE public.trip_participants 
ADD COLUMN media_consent boolean NOT NULL DEFAULT false;