var SPREADSHEET_ID = '1UOFPpm-fyY3j7XhpfyDGp_wpVXpUUs50OdJ4ei8a5TM';
var SHEET_NAME = 'Scorecard Submissions';

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = ss.getSheetByName(SHEET_NAME);

    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      var headers = [
        'Timestamp',
        'Name',
        'Role/Title',
        'School',
        'Country',
        'Email',
        'Phone',
        'Score',
        'Max Score',
        'Percentage',
        'Category',
        'Self Rating (1-10)',
        'Willingness to Improve',
        'Priorities',
        'Q1', 'A1', 'P1',
        'Q2', 'A2', 'P2',
        'Q3', 'A3', 'P3',
        'Q4', 'A4', 'P4',
        'Q5', 'A5', 'P5',
        'Q6', 'A6', 'P6',
        'Q7', 'A7', 'P7',
        'Q8', 'A8', 'P8',
        'Q9', 'A9', 'P9',
        'Q10', 'A10', 'P10',
        'Q11', 'A11', 'P11',
        'Q12', 'A12', 'P12',
        'Q13', 'A13', 'P13',
        'Q14', 'A14', 'P14',
        'Q15', 'A15', 'P15',
        'Q16', 'A16', 'P16',
        'Q17', 'A17', 'P17',
        'Q18', 'A18', 'P18',
        'Q19', 'A19', 'P19',
        'Q20', 'A20', 'P20'
      ];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
      sheet.setFrozenRows(1);
    }

    var rowData = [
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.role || '',
      data.school || '',
      data.country || '',
      data.email || '',
      data.phone || '',
      data.score || '',
      data.maxScore || '',
      data.percentage || '',
      data.category || '',
      data.selfRating || '',
      data.willingnessToImprove || '',
      data.priorities || ''
    ];

    for (var i = 1; i <= 20; i++) {
      rowData.push(data['Q' + i] || '');
      rowData.push(data['A' + i] || '');
      rowData.push(data['P' + i] || '');
    }

    sheet.appendRow(rowData);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput('Scorecard API is running. Use POST to submit data.')
    .setMimeType(ContentService.MimeType.TEXT);
}
