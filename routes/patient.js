const express = require("express");
const {
   patientRegister,
   patientCreateReport,
   patientAllReports,
} = require("../controller/patientController");

const { verifyToken } = require("../middleware/authMiddleware");

const router = express.Router();

router.use(verifyToken);

router.post("/register", patientRegister);

// patient id
router.post("/:id/create_report", patientCreateReport);

// patient id
router.get("/:id/all_reports", patientAllReports);

module.exports = router;
