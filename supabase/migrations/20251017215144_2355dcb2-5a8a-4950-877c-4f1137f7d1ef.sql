-- Create a function to import trip participants and create parent/student accounts
CREATE OR REPLACE FUNCTION public.import_trip_participants()
RETURNS TABLE (
  success_count INTEGER,
  error_count INTEGER,
  errors JSONB
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  participant_record RECORD;
  new_parent_id UUID;
  new_student_id UUID;
  new_auth_user_id UUID;
  temp_password TEXT;
  error_log JSONB := '[]'::JSONB;
  success_counter INTEGER := 0;
  error_counter INTEGER := 0;
BEGIN
  -- Loop through all trip participants
  FOR participant_record IN 
    SELECT * FROM trip_participants 
    WHERE emergency_contact_email IS NOT NULL
  LOOP
    BEGIN
      -- Generate a temporary password (user will need to reset)
      temp_password := 'TempPass' || substring(md5(random()::text) from 1 for 8) || '!';
      
      -- Create auth user for parent (if doesn't exist)
      -- Check if parent already exists
      SELECT id INTO new_parent_id 
      FROM parents 
      WHERE email = participant_record.emergency_contact_email
      LIMIT 1;
      
      IF new_parent_id IS NULL THEN
        -- Try to find existing auth user
        SELECT id INTO new_auth_user_id
        FROM auth.users
        WHERE email = participant_record.emergency_contact_email
        LIMIT 1;
        
        -- Create parent record
        INSERT INTO parents (
          auth_user_id,
          first_name,
          last_name,
          email,
          phone
        ) VALUES (
          new_auth_user_id,
          split_part(participant_record.emergency_contact_name, ' ', 1),
          COALESCE(split_part(participant_record.emergency_contact_name, ' ', 2), ''),
          participant_record.emergency_contact_email,
          participant_record.emergency_contact_phone
        )
        RETURNING id INTO new_parent_id;
      END IF;
      
      -- Check if school exists, if not use NULL
      DECLARE
        school_uuid UUID;
      BEGIN
        SELECT id INTO school_uuid
        FROM schools
        WHERE name = participant_record.school
        LIMIT 1;
        
        -- Create student record
        INSERT INTO students (
          parent_id,
          school_id,
          first_name,
          last_name,
          email,
          date_of_birth,
          gender,
          parent_email
        ) VALUES (
          new_parent_id,
          school_uuid,
          participant_record.first_name,
          participant_record.last_name,
          participant_record.emergency_contact_email, -- Use parent email as student email for now
          participant_record.date_of_birth,
          participant_record.gender,
          participant_record.emergency_contact_email
        )
        RETURNING id INTO new_student_id;
      END;
      
      success_counter := success_counter + 1;
      
    EXCEPTION WHEN OTHERS THEN
      error_counter := error_counter + 1;
      error_log := error_log || jsonb_build_object(
        'participant_id', participant_record.id,
        'email', participant_record.emergency_contact_email,
        'error', SQLERRM
      );
    END;
  END LOOP;
  
  RETURN QUERY SELECT success_counter, error_counter, error_log;
END;
$$;

-- Add a migration tracking table to avoid duplicate imports
CREATE TABLE IF NOT EXISTS public.data_migrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  migration_name TEXT NOT NULL UNIQUE,
  executed_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  success_count INTEGER,
  error_count INTEGER,
  error_details JSONB
);

ALTER TABLE public.data_migrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Only super admins can manage migrations"
ON public.data_migrations
FOR ALL
USING (has_role(auth.uid(), 'super_admin'::app_role));