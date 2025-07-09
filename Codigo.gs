function doGet(e) {
  const ss = SpreadsheetApp.openById("1ONdLBVmeI2a2wuwHZtD_APUzZRrOw-DDc7DMuRtho0g");
  const sheet = ss.getSheetByName("SEMAFORO");

  if (!sheet) {
    return ContentService.createTextOutput("Hoja 'SEMAFORO' no encontrada")
      .setMimeType(ContentService.MimeType.TEXT);
  }

  const lastRow = sheet.getLastRow();
  const numRows = lastRow - 2;
  if (numRows <= 0) {
    return ContentService.createTextOutput("Sin datos")
      .setMimeType(ContentService.MimeType.TEXT);
  }

  const headers = sheet.getRange(2, 1, 1, 9).getValues()[0]; // A2:I
  const data = sheet.getRange(3, 1, numRows, 10).getValues(); // A3:J
  const backgrounds = sheet.getRange(3, 1, numRows, 10).getBackgrounds();

  const result = data.map((row, i) => {
    const rowObj = {};
    headers.forEach((header, j) => {
      if (header !== "CITA DE ENTREGA") {
        rowObj[header] = {
          value: row[j],
          color: backgrounds[i][j]
        };
      }
    });
    rowObj['MAPA_URL'] = row[9];
    return rowObj;
  });

  return ContentService.createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}
