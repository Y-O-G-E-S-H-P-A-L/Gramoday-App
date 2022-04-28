const express = require("express");
const { createReport, getReport } = require("../controllers/reportController");

const router = express.Router();

router.route("/reports").post(createReport);
router.route("/reports/:id").get(getReport);

module.exports = router;
