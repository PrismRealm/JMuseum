
const router = require("express").Router();
const dataRender = require("../models/DataRender");

/**
 * 頁面「畫作主題」的路由處理
 */
router.get("/theme", (req, res) => {
    dataRender.DataRender("theme", req.url, req.session, (err, dataObj) => {
        if (err) {
            res.setHeader("Content-Type", "text/plain");
            res.status(500);
            res.end("Server side error : 500\n" + err);
        }
        else {
            res.render("theme", dataObj);
        }
    });
});

module.exports = router;