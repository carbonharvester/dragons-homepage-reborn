import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ScorecardSubmission {
  name: string;
  role: string;
  school: string;
  country: string;
  email: string;
  totalScore: number;
  answers: Record<string, number>;
  submittedAt: string;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const submission: ScorecardSubmission = await req.json();
    console.log("Received scorecard submission:", submission);

    // Get Google Sheets webhook URL from environment
    const webhookUrl = Deno.env.get("GOOGLE_SCRIPT_WEBHOOK_URL");
    
    if (!webhookUrl) {
      console.error("GOOGLE_SCRIPT_WEBHOOK_URL not configured");
      return new Response(
        JSON.stringify({ 
          error: "Google Sheets integration not configured" 
        }),
        { 
          status: 500, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    }

    // Determine score category
    let category = "Falling Behind";
    if (submission.totalScore >= 65) category = "Global Impact Leader";
    else if (submission.totalScore >= 45) category = "Emerging Changemaker";

    // Format data for Google Sheets
    const sheetData = {
      timestamp: submission.submittedAt,
      name: submission.name,
      role: submission.role,
      school: submission.school,
      country: submission.country,
      email: submission.email,
      score: submission.totalScore,
      category: category,
      answers: JSON.stringify(submission.answers)
    };

    console.log("Sending to Google Sheets:", sheetData);

    // Send to Google Sheets via webhook
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sheetData),
    });

    if (!response.ok) {
      console.error("Google Sheets webhook error:", response.status, response.statusText);
      throw new Error(`Google Sheets webhook failed: ${response.statusText}`);
    }

    console.log("Successfully submitted to Google Sheets");

    return new Response(
      JSON.stringify({ success: true, message: "Scorecard submitted successfully" }),
      { 
        status: 200, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );

  } catch (error) {
    console.error("Error in submit-scorecard function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message || "Failed to submit scorecard" 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  }
});
