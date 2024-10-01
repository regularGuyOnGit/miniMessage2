const db = require("../model/queries");
const { body, validationResult } = require("express-validator");

const get_users_messages = async (req, res) => {
  const usersDb = await db.getUsersAndMessages();

  res.render("index", {
    title: "Mini-MessageBoard",
    messages: usersDb,
  });
};
const get_users_form = async (req, res) => {
  res.render("form", {});
};
const post_users_form = [
  body("user")
    .trim()
    .escape()
    .isLength({ min: 1, max: 20 })
    .isAlpha()
    .withMessage("Username should be Alphabets"),
  body("text").trim().escape(),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("form", {
        title: "form",
        filledData: req.body,
        errors: errors.array(),
      });
    }
    // To Save Data in the DB
    await db.postUsersForm(req.body.user, req.body.text);

    res.redirect("/");
  },
];

const get_user = async (req, res) => {
  // some query to the db
  const intId = parseInt(req.params.id, 10);
  console.log(intId);
  console.log(typeof intId);
  console.log(Number.isInteger(intId));
  const [user] = await db.getUser(intId);

  console.log(user);
  res.render("message", {
    title: "User Information",
    msg: user,
  });
};

module.exports = {
  get_users_messages,
  get_users_form,
  post_users_form,
  get_user,
};
