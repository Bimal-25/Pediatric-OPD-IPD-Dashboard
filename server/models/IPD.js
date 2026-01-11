const mongoose = require("mongoose");

const ipdSchema = new mongoose.Schema(
  {
    patientName: String,
    age: Number,
    roomNo: String,
    disease: String,
    admissionDate: String,
    dischargeDate: String,
    charges: Number,
    status: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("ipd", ipdSchema);
