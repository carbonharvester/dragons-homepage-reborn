# Scorecard Google Sheets Integration Setup

This guide will help you set up Google Sheets to receive scorecard submissions automatically.

## Step 1: Create Your Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Kapes Adventures - Scorecard Leads"
4. In the first row, add these column headers:
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Role`
   - D1: `School`
   - E1: `Country`
   - F1: `Email`
   - G1: `Score`
   - H1: `Category`
   - I1: `Answers`

## Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code
3. Paste the following script:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);
    
    // Append the data as a new row
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.role,
      data.school,
      data.country,
      data.email,
      data.score,
      data.category,
      data.answers
    ]);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success',
      'message': 'Data received'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Save** (💾 icon)
5. Name your project "Scorecard Webhook"

## Step 3: Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Click the gear icon (⚙️) next to "Select type"
3. Choose **Web app**
4. Configure:
   - **Description**: "Scorecard webhook endpoint"
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
5. Click **Deploy**
6. Review permissions and click **Authorize access**
7. Choose your Google account and click **Allow**
8. **Copy the Web App URL** - it will look like:
   ```
   https://script.google.com/macros/s/[SCRIPT_ID]/exec
   ```

## Step 4: Configure in Lovable

1. The webhook URL has already been requested as a secret
2. When prompted, paste your Web App URL from Step 3
3. The edge function will automatically send scorecard data to your sheet

## Testing the Integration

1. Visit your scorecard at `/scorecard`
2. Complete the quiz
3. Submit your information
4. Check your Google Sheet - a new row should appear with the data

## Troubleshooting

### Data not appearing in sheet?
- Check that the script is deployed as "Anyone can access"
- Verify the webhook URL is correct in your Lovable secrets
- Check the Apps Script execution log: Apps Script editor → **Executions**

### Permission errors?
- Re-deploy the script
- Make sure "Execute as: Me" is selected
- Ensure you authorized all required permissions

### Wrong data format?
- Verify your column headers match exactly (case-sensitive)
- Check the Apps Script logs for error messages

## Data Fields

Each submission includes:
- **Timestamp**: When the scorecard was submitted
- **Name**: Decision-maker's full name
- **Role**: Their position at the school
- **School**: School name
- **Country**: School location
- **Email**: Contact email
- **Score**: Total score (20-80)
- **Category**: "Global Impact Leader", "Emerging Changemaker", or "Falling Behind"
- **Answers**: JSON object with detailed question responses

## Next Steps

Consider setting up:
1. **Email notifications**: Use Google Sheets add-ons to get notified of new submissions
2. **Auto-responder**: Create a follow-up email workflow in your CRM
3. **Data analysis**: Use Google Sheets formulas to track trends and insights
4. **Zapier integration**: Connect to your CRM or marketing automation tools
