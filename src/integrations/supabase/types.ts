export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      addons: {
        Row: {
          active: boolean
          addon_type: string
          created_at: string
          description: string | null
          display_order: number | null
          id: string
          is_subscription: boolean
          name: string
          price_aed: number
          stripe_price_id: string | null
          stripe_product_id: string | null
          updated_at: string
        }
        Insert: {
          active?: boolean
          addon_type: string
          created_at?: string
          description?: string | null
          display_order?: number | null
          id?: string
          is_subscription?: boolean
          name: string
          price_aed: number
          stripe_price_id?: string | null
          stripe_product_id?: string | null
          updated_at?: string
        }
        Update: {
          active?: boolean
          addon_type?: string
          created_at?: string
          description?: string | null
          display_order?: number | null
          id?: string
          is_subscription?: boolean
          name?: string
          price_aed?: number
          stripe_price_id?: string | null
          stripe_product_id?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      booking_addons: {
        Row: {
          addon_id: string
          booking_id: string
          created_at: string
          id: string
          price_aed: number
          quantity: number
          stripe_subscription_id: string | null
        }
        Insert: {
          addon_id: string
          booking_id: string
          created_at?: string
          id?: string
          price_aed: number
          quantity?: number
          stripe_subscription_id?: string | null
        }
        Update: {
          addon_id?: string
          booking_id?: string
          created_at?: string
          id?: string
          price_aed?: number
          quantity?: number
          stripe_subscription_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "booking_addons_addon_id_fkey"
            columns: ["addon_id"]
            isOneToOne: false
            referencedRelation: "addons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "booking_addons_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
        ]
      }
      booking_documents: {
        Row: {
          booking_id: string
          created_at: string
          document_type: string
          file_name: string
          file_path: string
          file_size: number
          id: string
          mime_type: string
          notes: string | null
          rejection_reason: string | null
          reviewed_at: string | null
          reviewed_by: string | null
          status: string
          updated_at: string
          uploaded_at: string
        }
        Insert: {
          booking_id: string
          created_at?: string
          document_type: string
          file_name: string
          file_path: string
          file_size: number
          id?: string
          mime_type: string
          notes?: string | null
          rejection_reason?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string
          updated_at?: string
          uploaded_at?: string
        }
        Update: {
          booking_id?: string
          created_at?: string
          document_type?: string
          file_name?: string
          file_path?: string
          file_size?: number
          id?: string
          mime_type?: string
          notes?: string | null
          rejection_reason?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string
          updated_at?: string
          uploaded_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "booking_documents_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
        ]
      }
      bookings: {
        Row: {
          addons_total_aed: number
          allergies: string | null
          amount_paid_aed: number
          base_price_aed: number
          booked_at: string
          cancellation_reason: string | null
          cancelled_at: string | null
          created_at: string
          deposit_amount_aed: number | null
          dietary_requirements: string | null
          emergency_contact_email: string | null
          emergency_contact_name: string
          emergency_contact_phone: string
          emergency_contact_relationship: string
          id: string
          interest_id: string | null
          meal_code: string | null
          media_consent: boolean
          medical_notes: string | null
          parent_id: string
          passport_expiry_date: string | null
          passport_image_url: string | null
          passport_nationality: string | null
          passport_number: string | null
          payment_status: string
          payment_type: string | null
          referral_discount_aed: number
          status: string
          stripe_payment_intent_id: string | null
          student_date_of_birth: string | null
          student_first_name: string
          student_gender: string | null
          student_id: string
          student_last_name: string
          terms_accepted: boolean
          total_price_aed: number
          trip_id: string
          updated_at: string
        }
        Insert: {
          addons_total_aed?: number
          allergies?: string | null
          amount_paid_aed?: number
          base_price_aed: number
          booked_at?: string
          cancellation_reason?: string | null
          cancelled_at?: string | null
          created_at?: string
          deposit_amount_aed?: number | null
          dietary_requirements?: string | null
          emergency_contact_email?: string | null
          emergency_contact_name: string
          emergency_contact_phone: string
          emergency_contact_relationship: string
          id?: string
          interest_id?: string | null
          meal_code?: string | null
          media_consent?: boolean
          medical_notes?: string | null
          parent_id: string
          passport_expiry_date?: string | null
          passport_image_url?: string | null
          passport_nationality?: string | null
          passport_number?: string | null
          payment_status?: string
          payment_type?: string | null
          referral_discount_aed?: number
          status?: string
          stripe_payment_intent_id?: string | null
          student_date_of_birth?: string | null
          student_first_name: string
          student_gender?: string | null
          student_id: string
          student_last_name: string
          terms_accepted?: boolean
          total_price_aed: number
          trip_id: string
          updated_at?: string
        }
        Update: {
          addons_total_aed?: number
          allergies?: string | null
          amount_paid_aed?: number
          base_price_aed?: number
          booked_at?: string
          cancellation_reason?: string | null
          cancelled_at?: string | null
          created_at?: string
          deposit_amount_aed?: number | null
          dietary_requirements?: string | null
          emergency_contact_email?: string | null
          emergency_contact_name?: string
          emergency_contact_phone?: string
          emergency_contact_relationship?: string
          id?: string
          interest_id?: string | null
          meal_code?: string | null
          media_consent?: boolean
          medical_notes?: string | null
          parent_id?: string
          passport_expiry_date?: string | null
          passport_image_url?: string | null
          passport_nationality?: string | null
          passport_number?: string | null
          payment_status?: string
          payment_type?: string | null
          referral_discount_aed?: number
          status?: string
          stripe_payment_intent_id?: string | null
          student_date_of_birth?: string | null
          student_first_name?: string
          student_gender?: string | null
          student_id?: string
          student_last_name?: string
          terms_accepted?: boolean
          total_price_aed?: number
          trip_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "bookings_interest_id_fkey"
            columns: ["interest_id"]
            isOneToOne: false
            referencedRelation: "student_interests"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "parents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_trip_id_fkey"
            columns: ["trip_id"]
            isOneToOne: false
            referencedRelation: "trip_analytics"
            referencedColumns: ["trip_id"]
          },
          {
            foreignKeyName: "bookings_trip_id_fkey"
            columns: ["trip_id"]
            isOneToOne: false
            referencedRelation: "trips"
            referencedColumns: ["id"]
          },
        ]
      }
      parents: {
        Row: {
          address_line1: string | null
          address_line2: string | null
          auth_user_id: string
          city: string | null
          country: string | null
          created_at: string
          email: string
          first_name: string
          id: string
          last_name: string
          phone: string | null
          postal_code: string | null
          updated_at: string
        }
        Insert: {
          address_line1?: string | null
          address_line2?: string | null
          auth_user_id: string
          city?: string | null
          country?: string | null
          created_at?: string
          email: string
          first_name: string
          id?: string
          last_name: string
          phone?: string | null
          postal_code?: string | null
          updated_at?: string
        }
        Update: {
          address_line1?: string | null
          address_line2?: string | null
          auth_user_id?: string
          city?: string | null
          country?: string | null
          created_at?: string
          email?: string
          first_name?: string
          id?: string
          last_name?: string
          phone?: string | null
          postal_code?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      school_trips: {
        Row: {
          created_at: string
          custom_price_aed: number | null
          id: string
          school_id: string
          trip_id: string
        }
        Insert: {
          created_at?: string
          custom_price_aed?: number | null
          id?: string
          school_id: string
          trip_id: string
        }
        Update: {
          created_at?: string
          custom_price_aed?: number | null
          id?: string
          school_id?: string
          trip_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "school_trips_school_id_fkey"
            columns: ["school_id"]
            isOneToOne: false
            referencedRelation: "schools"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "school_trips_trip_id_fkey"
            columns: ["trip_id"]
            isOneToOne: false
            referencedRelation: "trip_analytics"
            referencedColumns: ["trip_id"]
          },
          {
            foreignKeyName: "school_trips_trip_id_fkey"
            columns: ["trip_id"]
            isOneToOne: false
            referencedRelation: "trips"
            referencedColumns: ["id"]
          },
        ]
      }
      schools: {
        Row: {
          active: boolean
          contact_email: string | null
          contact_phone: string | null
          created_at: string
          enrollment_code: string
          id: string
          location: string | null
          name: string
          updated_at: string
        }
        Insert: {
          active?: boolean
          contact_email?: string | null
          contact_phone?: string | null
          created_at?: string
          enrollment_code: string
          id?: string
          location?: string | null
          name: string
          updated_at?: string
        }
        Update: {
          active?: boolean
          contact_email?: string | null
          contact_phone?: string | null
          created_at?: string
          enrollment_code?: string
          id?: string
          location?: string | null
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      student_interests: {
        Row: {
          created_at: string
          id: string
          notes: string | null
          parent_notified_at: string | null
          priority: number | null
          registered_at: string
          status: string
          student_id: string
          trip_id: string
          waitlist_position: number | null
          waitlisted_at: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          notes?: string | null
          parent_notified_at?: string | null
          priority?: number | null
          registered_at?: string
          status?: string
          student_id: string
          trip_id: string
          waitlist_position?: number | null
          waitlisted_at?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          notes?: string | null
          parent_notified_at?: string | null
          priority?: number | null
          registered_at?: string
          status?: string
          student_id?: string
          trip_id?: string
          waitlist_position?: number | null
          waitlisted_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "student_interests_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "student_interests_trip_id_fkey"
            columns: ["trip_id"]
            isOneToOne: false
            referencedRelation: "trip_analytics"
            referencedColumns: ["trip_id"]
          },
          {
            foreignKeyName: "student_interests_trip_id_fkey"
            columns: ["trip_id"]
            isOneToOne: false
            referencedRelation: "trips"
            referencedColumns: ["id"]
          },
        ]
      }
      students: {
        Row: {
          active: boolean
          auth_user_id: string | null
          created_at: string
          date_of_birth: string | null
          email: string
          first_name: string
          gender: string | null
          id: string
          last_name: string
          parent_email: string | null
          parent_id: string | null
          parent_invited_at: string | null
          parent_linked_at: string | null
          referral_code: string
          referral_credits_aed: number
          referred_by_student_id: string | null
          school_id: string
          updated_at: string
        }
        Insert: {
          active?: boolean
          auth_user_id?: string | null
          created_at?: string
          date_of_birth?: string | null
          email: string
          first_name: string
          gender?: string | null
          id?: string
          last_name: string
          parent_email?: string | null
          parent_id?: string | null
          parent_invited_at?: string | null
          parent_linked_at?: string | null
          referral_code: string
          referral_credits_aed?: number
          referred_by_student_id?: string | null
          school_id: string
          updated_at?: string
        }
        Update: {
          active?: boolean
          auth_user_id?: string | null
          created_at?: string
          date_of_birth?: string | null
          email?: string
          first_name?: string
          gender?: string | null
          id?: string
          last_name?: string
          parent_email?: string | null
          parent_id?: string | null
          parent_invited_at?: string | null
          parent_linked_at?: string | null
          referral_code?: string
          referral_credits_aed?: number
          referred_by_student_id?: string | null
          school_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "students_referred_by_student_id_fkey"
            columns: ["referred_by_student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "students_school_id_fkey"
            columns: ["school_id"]
            isOneToOne: false
            referencedRelation: "schools"
            referencedColumns: ["id"]
          },
        ]
      }
      trip_attendance: {
        Row: {
          booking_id: string
          created_at: string
          date: string
          id: string
          marked_at: string
          marked_by: string | null
          notes: string | null
          status: string
          trip_id: string
          updated_at: string
        }
        Insert: {
          booking_id: string
          created_at?: string
          date: string
          id?: string
          marked_at?: string
          marked_by?: string | null
          notes?: string | null
          status: string
          trip_id: string
          updated_at?: string
        }
        Update: {
          booking_id?: string
          created_at?: string
          date?: string
          id?: string
          marked_at?: string
          marked_by?: string | null
          notes?: string | null
          status?: string
          trip_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "trip_attendance_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "trip_attendance_trip_id_fkey"
            columns: ["trip_id"]
            isOneToOne: false
            referencedRelation: "trip_analytics"
            referencedColumns: ["trip_id"]
          },
          {
            foreignKeyName: "trip_attendance_trip_id_fkey"
            columns: ["trip_id"]
            isOneToOne: false
            referencedRelation: "trips"
            referencedColumns: ["id"]
          },
        ]
      }
      trip_participants: {
        Row: {
          allergies: string | null
          created_at: string
          date_of_birth: string
          dietary_requirements: string | null
          emergency_contact_email: string | null
          emergency_contact_name: string | null
          emergency_contact_phone: string | null
          emergency_contact_relationship: string | null
          first_name: string
          gender: string | null
          id: string
          last_name: string
          meal_code: string | null
          media_consent: boolean
          middle_name: string | null
          nationality: string
          passport_expiry_date: string
          passport_image_url: string | null
          passport_number: string
          school: string | null
          trip: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          allergies?: string | null
          created_at?: string
          date_of_birth: string
          dietary_requirements?: string | null
          emergency_contact_email?: string | null
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          emergency_contact_relationship?: string | null
          first_name: string
          gender?: string | null
          id?: string
          last_name: string
          meal_code?: string | null
          media_consent?: boolean
          middle_name?: string | null
          nationality: string
          passport_expiry_date: string
          passport_image_url?: string | null
          passport_number: string
          school?: string | null
          trip?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          allergies?: string | null
          created_at?: string
          date_of_birth?: string
          dietary_requirements?: string | null
          emergency_contact_email?: string | null
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          emergency_contact_relationship?: string | null
          first_name?: string
          gender?: string | null
          id?: string
          last_name?: string
          meal_code?: string | null
          media_consent?: boolean
          middle_name?: string | null
          nationality?: string
          passport_expiry_date?: string
          passport_image_url?: string | null
          passport_number?: string
          school?: string | null
          trip?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      trip_templates: {
        Row: {
          age_max: number | null
          age_min: number | null
          base_price_aed: number
          created_at: string | null
          created_by: string | null
          description: string | null
          destination: string
          duration_days: number
          exclusions: string[] | null
          id: string
          inclusions: string[] | null
          itinerary: Json | null
          max_participants: number | null
          name: string
          updated_at: string | null
        }
        Insert: {
          age_max?: number | null
          age_min?: number | null
          base_price_aed: number
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          destination: string
          duration_days: number
          exclusions?: string[] | null
          id?: string
          inclusions?: string[] | null
          itinerary?: Json | null
          max_participants?: number | null
          name: string
          updated_at?: string | null
        }
        Update: {
          age_max?: number | null
          age_min?: number | null
          base_price_aed?: number
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          destination?: string
          duration_days?: number
          exclusions?: string[] | null
          id?: string
          inclusions?: string[] | null
          itinerary?: Json | null
          max_participants?: number | null
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      trips: {
        Row: {
          age_max: number | null
          age_min: number | null
          base_price_aed: number
          booking_closes_at: string | null
          booking_opens_at: string | null
          created_at: string
          description: string | null
          destination: string
          duration_days: number
          exclusions: string[] | null
          gallery_images: string[] | null
          hero_image_url: string | null
          id: string
          inclusions: string[] | null
          interest_closes_at: string | null
          interest_opens_at: string | null
          itinerary: Json | null
          max_participants: number | null
          status: string
          title: string
          trip_end_date: string
          trip_start_date: string
          updated_at: string
        }
        Insert: {
          age_max?: number | null
          age_min?: number | null
          base_price_aed: number
          booking_closes_at?: string | null
          booking_opens_at?: string | null
          created_at?: string
          description?: string | null
          destination: string
          duration_days: number
          exclusions?: string[] | null
          gallery_images?: string[] | null
          hero_image_url?: string | null
          id?: string
          inclusions?: string[] | null
          interest_closes_at?: string | null
          interest_opens_at?: string | null
          itinerary?: Json | null
          max_participants?: number | null
          status?: string
          title: string
          trip_end_date: string
          trip_start_date: string
          updated_at?: string
        }
        Update: {
          age_max?: number | null
          age_min?: number | null
          base_price_aed?: number
          booking_closes_at?: string | null
          booking_opens_at?: string | null
          created_at?: string
          description?: string | null
          destination?: string
          duration_days?: number
          exclusions?: string[] | null
          gallery_images?: string[] | null
          hero_image_url?: string | null
          id?: string
          inclusions?: string[] | null
          interest_closes_at?: string | null
          interest_opens_at?: string | null
          itinerary?: Json | null
          max_participants?: number | null
          status?: string
          title?: string
          trip_end_date?: string
          trip_start_date?: string
          updated_at?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          school_id: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          school_id?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          school_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_roles_school_id_fkey"
            columns: ["school_id"]
            isOneToOne: false
            referencedRelation: "schools"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      trip_analytics: {
        Row: {
          collected_revenue_aed: number | null
          confirmed_bookings: number | null
          destination: string | null
          documents_approved: number | null
          documents_submitted: number | null
          max_participants: number | null
          paid_bookings: number | null
          status: string | null
          title: string | null
          total_bookings: number | null
          total_interests: number | null
          total_revenue_aed: number | null
          trip_end_date: string | null
          trip_id: string | null
          trip_start_date: string | null
          waitlist_count: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      get_user_school_id: {
        Args: { _user_id: string }
        Returns: string
      }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "super_admin" | "school_admin" | "parent" | "student"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["super_admin", "school_admin", "parent", "student"],
    },
  },
} as const
