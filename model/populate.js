const { Client } = require("pg");

const table = `
CREATE TABLE IF NOT EXISTS user_message (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  message VARCHAR ( 255 ),
  added DATE NOT NULL DEFAULT CURRENT_DATE
);

INSERT INTO user_message (username,message) 
VALUES
  ('Bryan' ,'Bryan here dear'),
  ('Odin','Odin here dear'),
  ('Damon','Damon here dear');
`;

async function main() {
  console.log("SEDDING");
  try {
    const client = new Client({
      host: "localhost",
      user: "postgres",
      database: "top_users",
      password: "nokiaasha",
      port: 5432,
    });
    await client.connect();
    await client.query(table);
    await client.end();
    console.log("done");
  } catch (e) {
    console.log(e);
  }
}

main();
