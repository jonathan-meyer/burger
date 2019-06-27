require("dotenv").config();

const mysql = require("mysql");
const connection = mysql.createConnection(process.env.JAWSDB_URL);

connection.on("connect", () => {
  console.log("[Connected to DB]");
});

module.exports = connection;
