const Report = require("../models/report");

const asyncHandler = require("express-async-handler");

// @desc    Register new user
// @route   POST /api/auth/register
// @access  Public

const statusReports = asyncHandler(async (req, res) => {
   try {
      const { status } = req.params;

      const result = await Report.find({ status: status });
      if (result.length > 0) {
         return res.status(200).json(result);
      } else {
         return res.status(200).json({ message: "there is no result found!" });
      }
   } catch (error) {
      return res.status(400).json(error);
   }
});

module.exports = { statusReports };
