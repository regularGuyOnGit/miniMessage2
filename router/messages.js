const express = require("express");
const newRouter = express.Router();
const controller = require("../controller/mainController");

newRouter.get("/", controller.get_users_messages);
newRouter.get("/new", controller.get_users_form);
newRouter.post("/new", controller.post_users_form);
newRouter.get("/:id", controller.get_user);
module.exports = newRouter;
