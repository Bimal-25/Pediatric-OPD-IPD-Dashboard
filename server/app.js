const express = require("express");
const cors = require("cors");

const opdRoutes = require("./routes/opdRoutes");
const ipdRoutes = require("./routes/ipdRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // ⭐ ADD THIS

app.use("/api/opd", opdRoutes);
app.use("/api/ipd", ipdRoutes);

module.exports = app;
