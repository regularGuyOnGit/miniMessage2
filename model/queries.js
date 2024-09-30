const pool = require("./databaseConnection");

//All the queries should be written here only;

async function getUsersAndMessages() {
  const { rows } = await pool.query(`SELECT * FROM user_message`);
  return rows;
}

async function postUsersForm(username, text) {
  await pool.query(
    `INSERT INTO user_message(username,message) VALUES ($1 , $2);`,
    [username, text]
  );
}

async function getUser(id) {
  const { rows } = await pool.query(
    `SELECT * FROM user_message WHERE id = $1`,
    [id]
  );
  return rows;
}

module.exports = {
  getUsersAndMessages,
  postUsersForm,
  getUser,
};
