const xlsx = require("xlsx-populate");

(async () => {

    let wb = await xlsx.fromBlankAsync();
    let sheet = wb.sheet(0);
    let range = sheet.range("A1:C3");
    range.value([
        ["姓名", "年龄", "性别"],
        ["小明", 20, "男"],
        ["小丽", 21, "女"],
    ]);

    let maxColumnNum = range.endCell().columnNumber();
    for (let c = 1; c <= maxColumnNum; c++) {
        let cell = sheet.cell(1, c);
        cell.style("fill", "00ffff");
    }
    await wb.toFileAsync("output.xlsx");
})();