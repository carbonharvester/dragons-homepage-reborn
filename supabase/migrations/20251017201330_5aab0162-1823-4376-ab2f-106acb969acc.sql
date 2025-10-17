-- Make interest_id nullable to support direct bookings
ALTER TABLE bookings 
ALTER COLUMN interest_id DROP NOT NULL;

-- Add index for better query performance
CREATE INDEX IF NOT EXISTS idx_bookings_interest_id ON bookings(interest_id) WHERE interest_id IS NOT NULL;

-- Update RLS policies for parents to view their children's interests
CREATE POLICY "Parents can view children's interests"
ON student_interests FOR SELECT
USING (
  student_id IN (
    SELECT id FROM students 
    WHERE parent_id IN (
      SELECT id FROM parents WHERE auth_user_id = auth.uid()
    )
  )
);

-- Allow parents to create interests on behalf of children
CREATE POLICY "Parents can create interests for children"
ON student_interests FOR INSERT
WITH CHECK (
  student_id IN (
    SELECT id FROM students 
    WHERE parent_id IN (
      SELECT id FROM parents WHERE auth_user_id = auth.uid()
    )
  )
);

-- Add parent booking policies
CREATE POLICY "Parents can view children's bookings through parent_id"
ON bookings FOR SELECT
USING (
  parent_id IN (
    SELECT id FROM parents WHERE auth_user_id = auth.uid()
  )
);