const Patient = require("../models/patient");
const Report = require("../models/report");

const asyncHandler = require("express-async-handler");

// @desc    Register new user
// @route   POST /api/auth/register
// @access  Public

const patientRegister = asyncHandler(async (req, res) => {
   const { name, phone } = req.body;

   if (!name || !phone) {
      res.status(400);
      throw new Error("please enter the name and phone");
   }

   const patientExsist = await Patient.findOne({ phone });

   if (patientExsist) {
      console.log("patient already");
      res.status(200).json({
         _id: patientExsist.id,
         name: patientExsist.name,
         phone: patientExsist.phone,
      });
   } else {
      const patient = await Patient.create({
         name,
         phone,
         doctor: req.user._id,
      });
      if (patient) {
         res.status(200).json({
            _id: patient.id,
            name: patient.name,
            phone: patient.phone,
         });
      } else {
         res.status(400);
         throw new Error("Invalid Patient");
      }
   }
});

const patientCreateReport = asyncHandler(async (req, res) => {
   const { status } = req.body;

   if (!status) {
      res.status(400);
      throw new Error("please enter the status");
   }

   const patientExsist = await Patient.findById(req.params.id);

   if (patientExsist) {
      let newReport = await Report.create({
         created_by: patientExsist.doctor,
         status: req.body.status,
         date: Date(),
      });

      patientExsist.report.push(newReport);
      patientExsist.save();

      res.status(200).json({
         _id: newReport._id,
         Created_By: newReport.created_by,
         Staus: newReport.status,
         Date: newReport.date,
      });
   } else {
      res.status(400);
      throw new Error("Invalid Patient");
   }
});

const patientAllReports = asyncHandler(async (req, res) => {
   const patientExsist = await Patient.findById(req.params.id);

   if (patientExsist) {
      let patientData = await Patient.findById(req.params.id).populate(
         "report"
      );

      res.status(200).json(patientData.report);
   } else {
      res.status(400);
      throw new Error("Invalid Patient");
   }
});

module.exports = {
   patientRegister,
   patientCreateReport,
   patientAllReports,
};
