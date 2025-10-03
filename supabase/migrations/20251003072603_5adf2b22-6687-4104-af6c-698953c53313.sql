-- Make the passports bucket public so image URLs work
UPDATE storage.buckets 
SET public = true 
WHERE id = 'passports';