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
    for (let i = 0; i < maxColumnNum; i++) {
        let cell = range.cell(0, i);
        cell.style("fill", "00ffff");
    }
    await wb.toFileAsync("output.xlsx");
})();