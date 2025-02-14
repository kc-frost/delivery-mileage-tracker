var sheet = SpreadsheetApp.getActiveSheet();

// TESTING
// Don't mess with this, or do, it doesn't really affect anything anyway
function debug() {
  let range = sheet.getRange(sheet.getLastRow(), 1, 1, 6);
  
}

// MAIN FUNCTION
/**
 * Interacts with the bound spreadsheet
 * and processes all the passed information via a webapp
 * 
 * @param {JSON} e 
 */
function doGet(e) {
  let lastRow = sheet.getLastRow();
  let timeZoneName = generateTimeZone();
  let time = generateTime();

  let clearLog = Boolean(JSON.parse(e.parameters.clearlog));
  if (clearLog) {
    clearMostRecentLog(lastRow);
    return;     // Quit program early if only clearing most recent log,
  }

  // Otherwise...
  if (startOrEnd()) {
    let date = generateDate();
    let orderID = JSON.parse(e.parameters.ordernum);

    sheet.appendRow([orderID, date, time]);
    let timeCell = sheet.getRange(lastRow+1, 3, 1, 1);
    timeCell.setNote(timeZoneName);

  } else {
    let mileage = JSON.parse(e.parameters.mileage);
    let basepay = JSON.parse(e.parameters.basepay);

    let range = sheet.getRange(lastRow, 4, 1, 3);
    let timeCell = sheet.getRange(lastRow, 4, 1, 1);
    timeCell.setNote(timeZoneName);

    let values = [[time, mileage, basepay]];
    range.setValues(values);
  }
}

// INTERNAL FUNCTIONS 
/**
 * Clears the contents and notes of
 * the most recent logged row
 * 
 * @param {Integer} lastRow 
 */
function clearMostRecentLog(lastRow) {
  for (let i = 1; i <= 6; i++) {
    let range = sheet.getRange(lastRow, i);

    range.clear();
    range.clearNote();
  }
}

/**
 * Creates date in the format of MM/DD/YY
 * and stores it in Google Sheet's "=DateValue()" formula
 * 
 * @returns   Today's date
 */
function generateDate() {
  let fullDate = new Date();
  let formattedDate = fullDate.toLocaleString("en-US", {
  month: "2-digit", 
  day: "2-digit", 
  year: "numeric"
  });

  let dateFormula = `=DateValue("${formattedDate}")`;
  return dateFormula;
}

/**
 * Creates timestamp in the format of HH:MM:SS
 * and stores it in Google Sheet's "=Time()" formula
 * 
 * @returns   Current time
 */
function generateTime() {
  let fullDate = new Date();
  let hours = fullDate.getHours();
  let minutes = fullDate.getMinutes();
  let seconds = fullDate.getSeconds();

  let timeFormula = `=Time("${hours}", "${minutes}", "${seconds}")`;
  return timeFormula;
}

/**
 * Returns the user's timezone (JST, PST, etc.)
 * @returns   User's timezone (abbreviated form)
 */
function generateTimeZone() {
  let timezone = new Date().toLocaleString("en-US", {
    timeZoneName:"long"
  });
  return timezone.substring(22);
}

/**
 * Determines which details are expected next 
 * @returns   true if start details are expected on next run
 */
function startOrEnd() {
  let lastRow = sheet.getLastRow();

  if (lastRow == 2) {
    return true;
  }

  if (sheet.getRange(lastRow,1,1,1).isBlank()) {
    return true;
  } 

  if (!sheet.getRange(lastRow, 4, 1, 1).isBlank()) {
    return true;
  } 

  return false;

}