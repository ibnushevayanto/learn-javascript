"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const locationRouter = require("./routes/location");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});
app.use(locationRouter);
app.listen(3000);
