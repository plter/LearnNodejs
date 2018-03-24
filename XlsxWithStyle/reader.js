const xlsx = require('xlsx-populate');

(async () => {

    let wb = await xlsx.fromFileAsync("Workbook1.xlsx");
    let sheet = wb.sheets()[0];
    let range = sheet.usedRange();
    let value = range.value();
    let firstCell = sheet.cell("A1");
    console.log(firstCell.columnNumber());

})();