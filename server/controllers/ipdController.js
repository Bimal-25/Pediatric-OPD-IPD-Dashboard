const IPD = require("../models/IPD");

exports.createIPD = async (req, res) => {
  try {
    console.log("📥 IPD GET HIT"); // ⭐ ADD THIS LINE
    console.log("Incoming IPD Data:", req.body); // debug

    const data = await IPD.create(req.body);

    res.status(201).json({
      message: "IPD saved successfully",
      data,
    });
  } catch (error) {
    console.error("IPD Save Error:", error);

    res.status(500).json({
      message: "Failed to save IPD",
      error: error.message,
    });
  }
};

exports.getIPD = async (req, res) => {
  try {
    const data = await IPD.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
