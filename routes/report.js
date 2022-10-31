const express = require("express");
const { statusReports } = require("../controller/reportController");

const roter = express.Router();

// const { verifyToken } = require("../middleware/authMiddleware");

roter.get("/:status", statusReports);

module.exports = roter;
