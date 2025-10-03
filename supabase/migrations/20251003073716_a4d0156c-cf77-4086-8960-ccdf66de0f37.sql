-- Drop existing policy and create a proper permissive policy for trip_participants
DROP POLICY IF EXISTS "Anyone can create participants" ON public.trip_participants;

-- Create a permissive policy that allows anyone to insert trip participants
CREATE POLICY "Enable insert for all users"
ON public.trip_participants
FOR INSERT
TO public
WITH CHECK (true);