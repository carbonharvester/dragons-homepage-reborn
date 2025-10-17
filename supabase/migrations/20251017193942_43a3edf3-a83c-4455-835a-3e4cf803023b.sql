-- Phase 1: Core Database Schema for Student-Initiated Booking Platform

-- ============================================
-- SCHOOLS & TRIPS
-- ============================================

-- Schools table with unique enrollment codes
CREATE TABLE public.schools (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  enrollment_code TEXT NOT NULL UNIQUE,
  location TEXT,
  contact_email TEXT,
  contact_phone TEXT,
  active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Trips table with registration windows
CREATE TABLE public.trips (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  destination TEXT NOT NULL,
  duration_days INTEGER NOT NULL,
  base_price_aed DECIMAL(10,2) NOT NULL,
  max_participants INTEGER,
  
  -- Registration windows
  interest_opens_at TIMESTAMPTZ,
  interest_closes_at TIMESTAMPTZ,
  booking_opens_at TIMESTAMPTZ,
  booking_closes_at TIMESTAMPTZ,
  
  -- Trip dates
  trip_start_date DATE NOT NULL,
  trip_end_date DATE NOT NULL,
  
  -- What's included
  inclusions TEXT[],
  exclusions TEXT[],
  
  -- Images and media
  hero_image_url TEXT,
  gallery_images TEXT[],
  
  -- Metadata
  age_min INTEGER,
  age_max INTEGER,
  status TEXT NOT NULL DEFAULT 'draft', -- draft, active, full, completed, cancelled
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Link trips to schools (a trip can be available to multiple schools)
CREATE TABLE public.school_trips (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id UUID NOT NULL REFERENCES public.schools(id) ON DELETE CASCADE,
  trip_id UUID NOT NULL REFERENCES public.trips(id) ON DELETE CASCADE,
  custom_price_aed DECIMAL(10,2), -- school-specific pricing override
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(school_id, trip_id)
);

-- ============================================
-- USERS: STUDENTS & PARENTS
-- ============================================

-- Students (primary registration)
CREATE TABLE public.students (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  auth_user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
  
  -- Personal info
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  date_of_birth DATE,
  gender TEXT,
  
  -- School linkage
  school_id UUID NOT NULL REFERENCES public.schools(id) ON DELETE RESTRICT,
  
  -- Referral system
  referral_code TEXT NOT NULL UNIQUE,
  referred_by_student_id UUID REFERENCES public.students(id) ON DELETE SET NULL,
  referral_credits_aed DECIMAL(10,2) NOT NULL DEFAULT 0,
  
  -- Parent linkage (set when parent accepts invitation)
  parent_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  parent_email TEXT, -- stored when student provides it
  parent_invited_at TIMESTAMPTZ,
  parent_linked_at TIMESTAMPTZ,
  
  -- Metadata
  active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Parents (created via invitation)
CREATE TABLE public.parents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  auth_user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
  
  -- Personal info
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT,
  address_line1 TEXT,
  address_line2 TEXT,
  city TEXT,
  country TEXT,
  postal_code TEXT,
  
  -- Metadata
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ============================================
-- INTEREST & BOOKINGS
-- ============================================

-- Student interest registrations (during interest period)
CREATE TABLE public.student_interests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
  trip_id UUID NOT NULL REFERENCES public.trips(id) ON DELETE CASCADE,
  
  -- Interest details
  registered_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  priority INTEGER DEFAULT 1, -- if student interested in multiple trips
  notes TEXT,
  
  -- Status tracking
  status TEXT NOT NULL DEFAULT 'pending', -- pending, parent_notified, parent_viewing, booked, expired
  parent_notified_at TIMESTAMPTZ,
  
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(student_id, trip_id)
);

-- Bookings (parent completes payment)
CREATE TABLE public.bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Relationships
  student_id UUID NOT NULL REFERENCES public.students(id) ON DELETE RESTRICT,
  parent_id UUID NOT NULL REFERENCES public.parents(id) ON DELETE RESTRICT,
  trip_id UUID NOT NULL REFERENCES public.trips(id) ON DELETE RESTRICT,
  interest_id UUID REFERENCES public.student_interests(id) ON DELETE SET NULL,
  
  -- Pricing
  base_price_aed DECIMAL(10,2) NOT NULL,
  addons_total_aed DECIMAL(10,2) NOT NULL DEFAULT 0,
  referral_discount_aed DECIMAL(10,2) NOT NULL DEFAULT 0,
  total_price_aed DECIMAL(10,2) NOT NULL,
  
  -- Payment
  payment_status TEXT NOT NULL DEFAULT 'pending', -- pending, deposit_paid, fully_paid, refunded
  payment_type TEXT, -- full, deposit
  deposit_amount_aed DECIMAL(10,2),
  amount_paid_aed DECIMAL(10,2) NOT NULL DEFAULT 0,
  stripe_payment_intent_id TEXT,
  
  -- Student details (snapshot at booking time)
  student_first_name TEXT NOT NULL,
  student_last_name TEXT NOT NULL,
  student_date_of_birth DATE,
  student_gender TEXT,
  
  -- Medical & dietary
  allergies TEXT,
  dietary_requirements TEXT,
  meal_code TEXT,
  medical_notes TEXT,
  
  -- Emergency contact
  emergency_contact_name TEXT NOT NULL,
  emergency_contact_relationship TEXT NOT NULL,
  emergency_contact_phone TEXT NOT NULL,
  emergency_contact_email TEXT,
  
  -- Documents
  passport_number TEXT,
  passport_nationality TEXT,
  passport_expiry_date DATE,
  passport_image_url TEXT,
  
  -- Consent
  media_consent BOOLEAN NOT NULL DEFAULT false,
  terms_accepted BOOLEAN NOT NULL DEFAULT false,
  
  -- Metadata
  status TEXT NOT NULL DEFAULT 'pending', -- pending, confirmed, cancelled, completed
  booked_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  cancelled_at TIMESTAMPTZ,
  cancellation_reason TEXT,
  
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ============================================
-- ADD-ONS
-- ============================================

-- Available add-ons
CREATE TABLE public.addons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  price_aed DECIMAL(10,2) NOT NULL,
  addon_type TEXT NOT NULL, -- insurance, kit, photography, course, carbon_offset, annual_pass
  is_subscription BOOLEAN NOT NULL DEFAULT false, -- for annual pass
  stripe_product_id TEXT,
  stripe_price_id TEXT,
  active BOOLEAN NOT NULL DEFAULT true,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Booking add-ons (what parent selected)
CREATE TABLE public.booking_addons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id UUID NOT NULL REFERENCES public.bookings(id) ON DELETE CASCADE,
  addon_id UUID NOT NULL REFERENCES public.addons(id) ON DELETE RESTRICT,
  quantity INTEGER NOT NULL DEFAULT 1,
  price_aed DECIMAL(10,2) NOT NULL,
  stripe_subscription_id TEXT, -- for annual pass
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(booking_id, addon_id)
);

-- ============================================
-- USER ROLES (Admin Hierarchy)
-- ============================================

-- Role types enum
CREATE TYPE public.app_role AS ENUM ('super_admin', 'school_admin', 'parent', 'student');

-- User roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role app_role NOT NULL,
  school_id UUID REFERENCES public.schools(id) ON DELETE CASCADE, -- for school_admin
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id, role, school_id)
);

-- Security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Function to get user's school (for school admins)
CREATE OR REPLACE FUNCTION public.get_user_school_id(_user_id uuid)
RETURNS uuid
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT school_id
  FROM public.user_roles
  WHERE user_id = _user_id
    AND role = 'school_admin'
  LIMIT 1
$$;

-- ============================================
-- TRIGGERS FOR UPDATED_AT
-- ============================================

CREATE TRIGGER update_schools_updated_at
  BEFORE UPDATE ON public.schools
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_trips_updated_at
  BEFORE UPDATE ON public.trips
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_students_updated_at
  BEFORE UPDATE ON public.students
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_parents_updated_at
  BEFORE UPDATE ON public.parents
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_bookings_updated_at
  BEFORE UPDATE ON public.bookings
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_addons_updated_at
  BEFORE UPDATE ON public.addons
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- ============================================
-- ROW LEVEL SECURITY POLICIES
-- ============================================

-- Enable RLS on all tables
ALTER TABLE public.schools ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.trips ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.school_trips ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.parents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.student_interests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.addons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.booking_addons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Schools: readable by authenticated users, manageable by admins
CREATE POLICY "Anyone can view active schools"
  ON public.schools FOR SELECT
  USING (active = true);

CREATE POLICY "Super admins can manage schools"
  ON public.schools FOR ALL
  USING (public.has_role(auth.uid(), 'super_admin'));

-- Trips: readable by students of linked schools
CREATE POLICY "Students can view trips for their school"
  ON public.trips FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.students s
      JOIN public.school_trips st ON st.school_id = s.school_id
      WHERE s.auth_user_id = auth.uid()
        AND st.trip_id = trips.id
    )
    OR public.has_role(auth.uid(), 'super_admin')
    OR public.has_role(auth.uid(), 'school_admin')
  );

CREATE POLICY "Admins can manage trips"
  ON public.trips FOR ALL
  USING (
    public.has_role(auth.uid(), 'super_admin')
    OR public.has_role(auth.uid(), 'school_admin')
  );

-- School trips: manageable by admins
CREATE POLICY "Admins can view school trips"
  ON public.school_trips FOR SELECT
  USING (
    public.has_role(auth.uid(), 'super_admin')
    OR (
      public.has_role(auth.uid(), 'school_admin')
      AND school_id = public.get_user_school_id(auth.uid())
    )
  );

CREATE POLICY "Super admins can manage school trips"
  ON public.school_trips FOR ALL
  USING (public.has_role(auth.uid(), 'super_admin'));

-- Students: can view/edit own profile
CREATE POLICY "Students can view own profile"
  ON public.students FOR SELECT
  USING (auth_user_id = auth.uid());

CREATE POLICY "Students can update own profile"
  ON public.students FOR UPDATE
  USING (auth_user_id = auth.uid());

CREATE POLICY "Anyone can create student profile"
  ON public.students FOR INSERT
  WITH CHECK (auth_user_id = auth.uid());

CREATE POLICY "School admins can view their school's students"
  ON public.students FOR SELECT
  USING (
    public.has_role(auth.uid(), 'school_admin')
    AND school_id = public.get_user_school_id(auth.uid())
  );

CREATE POLICY "Super admins can view all students"
  ON public.students FOR SELECT
  USING (public.has_role(auth.uid(), 'super_admin'));

-- Parents: can view/edit own profile
CREATE POLICY "Parents can view own profile"
  ON public.parents FOR SELECT
  USING (auth_user_id = auth.uid());

CREATE POLICY "Parents can update own profile"
  ON public.parents FOR UPDATE
  USING (auth_user_id = auth.uid());

CREATE POLICY "Anyone can create parent profile"
  ON public.parents FOR INSERT
  WITH CHECK (auth_user_id = auth.uid());

CREATE POLICY "Super admins can view all parents"
  ON public.parents FOR SELECT
  USING (public.has_role(auth.uid(), 'super_admin'));

-- Student interests: students can manage their own
CREATE POLICY "Students can view own interests"
  ON public.student_interests FOR SELECT
  USING (
    student_id IN (
      SELECT id FROM public.students WHERE auth_user_id = auth.uid()
    )
  );

CREATE POLICY "Students can create own interests"
  ON public.student_interests FOR INSERT
  WITH CHECK (
    student_id IN (
      SELECT id FROM public.students WHERE auth_user_id = auth.uid()
    )
  );

CREATE POLICY "Students can update own interests"
  ON public.student_interests FOR UPDATE
  USING (
    student_id IN (
      SELECT id FROM public.students WHERE auth_user_id = auth.uid()
    )
  );

CREATE POLICY "Admins can view student interests"
  ON public.student_interests FOR SELECT
  USING (
    public.has_role(auth.uid(), 'super_admin')
    OR (
      public.has_role(auth.uid(), 'school_admin')
      AND student_id IN (
        SELECT id FROM public.students
        WHERE school_id = public.get_user_school_id(auth.uid())
      )
    )
  );

-- Bookings: parents see their bookings, students see theirs
CREATE POLICY "Parents can view own bookings"
  ON public.bookings FOR SELECT
  USING (
    parent_id IN (
      SELECT id FROM public.parents WHERE auth_user_id = auth.uid()
    )
  );

CREATE POLICY "Students can view own bookings"
  ON public.bookings FOR SELECT
  USING (
    student_id IN (
      SELECT id FROM public.students WHERE auth_user_id = auth.uid()
    )
  );

CREATE POLICY "Parents can create bookings"
  ON public.bookings FOR INSERT
  WITH CHECK (
    parent_id IN (
      SELECT id FROM public.parents WHERE auth_user_id = auth.uid()
    )
  );

CREATE POLICY "Parents can update own bookings"
  ON public.bookings FOR UPDATE
  USING (
    parent_id IN (
      SELECT id FROM public.parents WHERE auth_user_id = auth.uid()
    )
  );

CREATE POLICY "Admins can view bookings"
  ON public.bookings FOR SELECT
  USING (
    public.has_role(auth.uid(), 'super_admin')
    OR (
      public.has_role(auth.uid(), 'school_admin')
      AND student_id IN (
        SELECT id FROM public.students
        WHERE school_id = public.get_user_school_id(auth.uid())
      )
    )
  );

-- Add-ons: public read, admin write
CREATE POLICY "Anyone can view active addons"
  ON public.addons FOR SELECT
  USING (active = true);

CREATE POLICY "Admins can manage addons"
  ON public.addons FOR ALL
  USING (public.has_role(auth.uid(), 'super_admin'));

-- Booking add-ons: linked to bookings
CREATE POLICY "Users can view own booking addons"
  ON public.booking_addons FOR SELECT
  USING (
    booking_id IN (
      SELECT id FROM public.bookings
      WHERE parent_id IN (
        SELECT id FROM public.parents WHERE auth_user_id = auth.uid()
      )
      OR student_id IN (
        SELECT id FROM public.students WHERE auth_user_id = auth.uid()
      )
    )
  );

CREATE POLICY "Parents can manage own booking addons"
  ON public.booking_addons FOR ALL
  USING (
    booking_id IN (
      SELECT id FROM public.bookings
      WHERE parent_id IN (
        SELECT id FROM public.parents WHERE auth_user_id = auth.uid()
      )
    )
  );

CREATE POLICY "Admins can view booking addons"
  ON public.booking_addons FOR SELECT
  USING (
    public.has_role(auth.uid(), 'super_admin')
    OR public.has_role(auth.uid(), 'school_admin')
  );

-- User roles: users can view own roles
CREATE POLICY "Users can view own roles"
  ON public.user_roles FOR SELECT
  USING (user_id = auth.uid());

CREATE POLICY "Super admins can manage all roles"
  ON public.user_roles FOR ALL
  USING (public.has_role(auth.uid(), 'super_admin'));

-- ============================================
-- INDEXES FOR PERFORMANCE
-- ============================================

CREATE INDEX idx_schools_enrollment_code ON public.schools(enrollment_code);
CREATE INDEX idx_trips_status ON public.trips(status);
CREATE INDEX idx_trips_dates ON public.trips(trip_start_date, trip_end_date);
CREATE INDEX idx_school_trips_school ON public.school_trips(school_id);
CREATE INDEX idx_school_trips_trip ON public.school_trips(trip_id);
CREATE INDEX idx_students_auth_user ON public.students(auth_user_id);
CREATE INDEX idx_students_school ON public.students(school_id);
CREATE INDEX idx_students_referral_code ON public.students(referral_code);
CREATE INDEX idx_students_referred_by ON public.students(referred_by_student_id);
CREATE INDEX idx_parents_auth_user ON public.parents(auth_user_id);
CREATE INDEX idx_student_interests_student ON public.student_interests(student_id);
CREATE INDEX idx_student_interests_trip ON public.student_interests(trip_id);
CREATE INDEX idx_bookings_student ON public.bookings(student_id);
CREATE INDEX idx_bookings_parent ON public.bookings(parent_id);
CREATE INDEX idx_bookings_trip ON public.bookings(trip_id);
CREATE INDEX idx_bookings_status ON public.bookings(status);
CREATE INDEX idx_booking_addons_booking ON public.booking_addons(booking_id);
CREATE INDEX idx_user_roles_user ON public.user_roles(user_id);
CREATE INDEX idx_user_roles_role ON public.user_roles(role);