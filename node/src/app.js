const express = require("express");
const cors = require("cors");

const app = express();

const index = require("./routes/index");
const tb01 = require("./routes/tb01.routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));
app.use(cors());

app.use(index);
app.use(tb01);

module.exports = app