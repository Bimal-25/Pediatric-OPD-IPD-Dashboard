const OPD = require("../models/OPD");

exports.createOPD = async (req, res) => {
  try {
    console.log("✅ OPD HIT:", req.body);

    const opd = await OPD.create(req.body);
    res.status(201).json(opd);
  } catch (err) {
    console.error("❌ OPD CREATE ERROR:", err);
    res.status(500).json({ message: err.message });
  }
};

exports.getOPD = async (req, res) => {
  try {
    const data = await OPD.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    console.error("❌ OPD FETCH ERROR:", err);
    res.status(500).json({ message: err.message });
  }
};

exports.updateOPD = async (req, res) => {
  try {
    const updated = await OPD.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    console.error("❌ OPD UPDATE ERROR:", err);
    res.status(500).json({ message: err.message });
  }
};
