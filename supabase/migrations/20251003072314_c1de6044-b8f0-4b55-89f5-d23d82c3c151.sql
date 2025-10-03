-- Make user_id nullable to allow public submissions
ALTER TABLE public.trip_participants 
ALTER COLUMN user_id DROP NOT NULL;

-- Drop existing RLS policies that require authentication
DROP POLICY IF EXISTS "Users can view their own participants" ON public.trip_participants;
DROP POLICY IF EXISTS "Users can create their own participants" ON public.trip_participants;
DROP POLICY IF EXISTS "Users can update their own participants" ON public.trip_participants;
DROP POLICY IF EXISTS "Users can delete their own participants" ON public.trip_participants;

-- Create new policy to allow public inserts (no authentication required)
CREATE POLICY "Anyone can create participants"
ON public.trip_participants
FOR INSERT
TO anon
WITH CHECK (true);

-- Allow public uploads to passports bucket
CREATE POLICY "Anyone can upload passports"
ON storage.objects
FOR INSERT
TO anon
WITH CHECK (bucket_id = 'passports');

-- Allow public reads of passports (in case needed for verification)
CREATE POLICY "Anyone can view passports"
ON storage.objects
FOR SELECT
TO anon
USING (bucket_id = 'passports');