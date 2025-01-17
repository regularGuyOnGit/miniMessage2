const express = require("express");
const app = express();
const path = require("node:path");
const logger = require("morgan");
require("dotenv").config();
const messageRouter = require("./router/messages");
require('dotenv').config()

app.use(logger());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", messageRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running on 3000");
});
