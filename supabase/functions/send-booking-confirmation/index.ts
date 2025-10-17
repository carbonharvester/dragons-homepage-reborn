import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface BookingConfirmationRequest {
  parentEmail: string;
  parentName: string;
  childName: string;
  tripName: string;
  tripDates: string;
  bookingReference: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { 
      parentEmail, 
      parentName, 
      childName, 
      tripName, 
      tripDates,
      bookingReference 
    }: BookingConfirmationRequest = await req.json();

    console.log("Sending booking confirmation to:", parentEmail);

    const emailResponse = await resend.emails.send({
      from: "Kapes Adventures <onboarding@resend.dev>",
      to: [parentEmail],
      subject: `Booking Confirmation - ${tripName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #2c3e50;">Booking Confirmed!</h1>
          
          <p>Dear ${parentName},</p>
          
          <p>Thank you for booking with Kapes Adventures. We're excited to confirm ${childName}'s place on our trip.</p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #2c3e50; margin-top: 0;">Trip Details</h2>
            <p><strong>Trip:</strong> ${tripName}</p>
            <p><strong>Dates:</strong> ${tripDates}</p>
            <p><strong>Participant:</strong> ${childName}</p>
            <p><strong>Booking Reference:</strong> ${bookingReference}</p>
          </div>
          
          <h3 style="color: #2c3e50;">Next Steps</h3>
          <ol>
            <li>You will receive a detailed itinerary within 48 hours</li>
            <li>Payment instructions will be sent separately</li>
            <li>Please complete the participant forms in your dashboard</li>
          </ol>
          
          <p>If you have any questions, please don't hesitate to contact us.</p>
          
          <p style="margin-top: 30px;">
            Best regards,<br>
            <strong>The Kapes Adventures Team</strong>
          </p>
          
          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #dee2e6; color: #6c757d; font-size: 12px;">
            <p>This is an automated confirmation email. Please do not reply to this email.</p>
          </div>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-booking-confirmation function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
