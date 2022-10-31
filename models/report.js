const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema(
   {
      created_by: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Doctor",
         required: true,
      },

      status: {
         type: String,
         enum: [
            "Negative",
            "Travelled-Quarantine",
            "Symptoms-Quarantine",
            "Positive-Admit",
         ],
         required: true,
      },

      date: { type: Date, default: Date.now },
   },
   {
      timestamps: true,
   }
);
const Report = mongoose.model("Report", reportSchema);
module.exports = Report;
