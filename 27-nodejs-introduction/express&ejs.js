"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set("view engine", "ejs");
app.set("views", "tampilan_ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.setHeader("Content-Type", "text/html");
    //   res.send("<h1>Hello World</h1>");
    //   res.end();
    next();
});
app.use((req, res, next) => {
    const name = req?.body.name || "Unknown User";
    res.render("index", { nama: name });
    res.end();
});
app.listen(3000);
