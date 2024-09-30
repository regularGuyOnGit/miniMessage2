const express = require("express");
const app = express();
const path = require("node:path");
const logger = require("morgan");
const messageRouter = require("./router/messages");

app.use(logger());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", messageRouter);

app.listen(3000, () => {
  console.log("Server running on 3000");
});
