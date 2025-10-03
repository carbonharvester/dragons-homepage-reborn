import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const webhookUrl = Deno.env.get('GOOGLE_SCRIPT_WEBHOOK_URL');
    
    if (!webhookUrl) {
      console.error('GOOGLE_SCRIPT_WEBHOOK_URL not configured');
      throw new Error('Webhook URL not configured');
    }

    const participantData = await req.json();
    console.log('Sending data to Google Sheets:', JSON.stringify(participantData, null, 2));

    // Send data to Google Apps Script
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(participantData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Google Apps Script error:', errorText);
      throw new Error(`Failed to send to Google Sheets: ${response.status} ${errorText}`);
    }

    const result = await response.json();
    console.log('Google Sheets response:', result);

    return new Response(
      JSON.stringify({ success: true, result }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );

  } catch (error) {
    console.error('Error in send-to-google-sheets function:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
});
