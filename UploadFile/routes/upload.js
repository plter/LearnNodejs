var express = require('express');
var router = express.Router();
var multer = require("multer");
const fs = require("fs");

var uploader = multer();

/* GET users listing. */
router.post('/', uploader.single("img"), function (req, res, next) {

    fs.writeFile(`public/${req.file.originalname}`, req.file.buffer, function (err) {
        if (err) {
            throw new Error(`Unable to save file ${req.file.originalname}`);
        }

        res.render("upload", {imageName: req.file.originalname});
    });
});

module.exports = router;
