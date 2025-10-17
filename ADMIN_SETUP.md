# Admin Setup Instructions

## 🚀 Quick Start: Setting Up Your First Super Admin

Since we're using proper role-based security, you need to create a super admin account to access the admin dashboard.

### Step 1: Create Admin Account

1. Go to `/admin/login`
2. Since you don't have an account yet, you'll need to create one manually in the database

### Step 2: Add Super Admin Role (Run this SQL in Lovable Cloud Dashboard)

After you create your auth account, run this SQL to give yourself super_admin access:

```sql
-- Replace 'your-email@example.com' with the email you'll use to sign up
INSERT INTO public.user_roles (user_id, role)
SELECT id, 'super_admin'::app_role
FROM auth.users
WHERE email = 'your-email@example.com';
```

**OR** if you want to do this after signing up via the Auth page:

1. Sign up at `/auth` with your admin email
2. Copy your user ID from the auth.users table
3. Run:
```sql
INSERT INTO public.user_roles (user_id, role)
VALUES ('your-user-id-here', 'super_admin');
```

### Step 3: Sign In to Admin Portal

1. Visit `/admin/login`
2. Sign in with your email/password
3. You'll be redirected to `/admin/dashboard`

---

## ✅ What's Already Set Up

### Database
- ✅ Schools table with enrollment codes
- ✅ Trips table with registration windows
- ✅ Add-ons table
- ✅ Students, Parents, Bookings tables
- ✅ User roles (super_admin, school_admin, parent, student)
- ✅ Row Level Security policies

### Test Data
- ✅ 2 test schools created:
  - Dubai International Academy (Code: `SCHDIA123`)
  - GEMS Wellington (Code: `SCHWEL456`)
  
- ✅ 6 add-ons created:
  - Trip Insurance (AED 350)
  - Kapes Kit Pack (AED 400)
  - Photography Package (AED 200)
  - Pre-Trip Impact Course (AED 150)
  - Carbon Offset (AED 60)
  - Annual Pass (AED 399)

---

## 🎯 Admin Features Available

### Super Admin Can:
- ✅ Create and manage schools
- ✅ Generate enrollment codes
- ✅ Create trips and assign to schools
- ✅ Manage add-ons
- ✅ View all students and bookings
- 🚧 Create school admin accounts (coming soon)

### School Admin Can:
- ✅ View their school's trips
- ✅ View their school's students
- ✅ View their school's bookings

---

## 📋 Next Steps

Once you have super admin access:

1. **Test the Schools Page** (`/admin/schools`)
   - You'll see the 2 test schools
   - Try creating a new school

2. **Create Your First Trip** (`/admin/trips` - coming in next phase)
   - Set trip details (name, destination, dates)
   - Set registration windows (interest period, booking period)
   - Assign to schools
   - Set pricing

3. **Test Student Registration**
   - Go to `/student` portal
   - Use enrollment code: `SCHDIA123`
   - Create student account
   - Browse available trips (once you create them)

---

## 🔐 Security Notes

- All admin pages check for proper role authentication
- RLS policies prevent unauthorized data access
- Enrollment codes are unique per school
- Student referral codes are auto-generated
- Passwords are hashed by Supabase Auth
