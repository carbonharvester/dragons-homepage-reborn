-- Create a function to handle initial admin signup
-- This bypasses RLS using SECURITY DEFINER
CREATE OR REPLACE FUNCTION public.create_admin_user(user_email text, user_password text)
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  new_user_id uuid;
  result json;
BEGIN
  -- Check if this is the first user (allow first user to be admin)
  -- or if caller already has super_admin role
  IF EXISTS (SELECT 1 FROM public.user_roles WHERE role = 'super_admin'::app_role) 
     AND NOT public.has_role(auth.uid(), 'super_admin'::app_role) THEN
    RAISE EXCEPTION 'Only existing super admins can create new admin accounts';
  END IF;

  -- Get the user ID (user must already be created via auth.signUp)
  SELECT id INTO new_user_id
  FROM auth.users
  WHERE email = user_email;

  IF new_user_id IS NULL THEN
    RAISE EXCEPTION 'User not found';
  END IF;

  -- Insert admin role
  INSERT INTO public.user_roles (user_id, role)
  VALUES (new_user_id, 'super_admin'::app_role)
  ON CONFLICT (user_id, role) DO NOTHING;

  result := json_build_object('success', true, 'user_id', new_user_id);
  RETURN result;
END;
$$;

-- Grant execute permission to authenticated users
GRANT EXECUTE ON FUNCTION public.create_admin_user(text, text) TO authenticated;
