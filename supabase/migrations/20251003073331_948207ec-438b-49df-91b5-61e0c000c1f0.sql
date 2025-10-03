-- Drop existing policies
DROP POLICY IF EXISTS "Anyone can upload passports" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can view passports" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can update passports" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can delete passports" ON storage.objects;

-- Create RLS policies for passports bucket to allow anonymous uploads
CREATE POLICY "Anyone can upload passports" 
ON storage.objects 
FOR INSERT 
TO public
WITH CHECK (bucket_id = 'passports');

CREATE POLICY "Anyone can view passports" 
ON storage.objects 
FOR SELECT 
TO public
USING (bucket_id = 'passports');

CREATE POLICY "Anyone can update passports" 
ON storage.objects 
FOR UPDATE 
TO public
USING (bucket_id = 'passports');

CREATE POLICY "Anyone can delete passports" 
ON storage.objects 
FOR DELETE 
TO public
USING (bucket_id = 'passports');