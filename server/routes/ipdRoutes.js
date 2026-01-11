const express = require("express");
const { createIPD, getIPD } = require("../controllers/ipdController");

const router = express.Router();

router.post("/", createIPD);
router.get("/", getIPD);

module.exports = router;
