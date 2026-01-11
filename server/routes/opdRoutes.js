const express = require("express");
const {
  createOPD,
  getOPD,
  updateOPD,
} = require("../controllers/opdController");

const router = express.Router();

router.get(
  "/",
  (req, res, next) => {
    console.log("✅ OPD GET ROUTE HIT");
    next();
  },
  getOPD
);

router.post(
  "/",
  (req, res, next) => {
    console.log("✅ OPD POST ROUTE HIT");
    console.log("BODY:", req.body);
    next();
  },
  createOPD
);

router.put("/:id", updateOPD);

module.exports = router;
