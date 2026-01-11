const mongoose = require("mongoose");

const opdSchema = new mongoose.Schema(
  {
    date: { type: String, required: true },
    name: { type: String, required: true, trim: true },
    ageGroup: { type: String },
    opdId: { type: String, required: true, unique: true },
    visitType: { type: String, enum: ["New", "Follow-up"] },
    charges: { type: Number, default: 0 },
    sickness: { type: String },
    medicine: { type: String },
    status: { type: String, default: "Active" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("opd", opdSchema);
