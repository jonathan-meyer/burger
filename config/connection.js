const mysql = require("mysql");
const connection = mysql.createConnection(process.env.JAWSDB_URL);

connection.on("connect", () => {
  console.log("[Connected to DB]");
});

connection.on("end", () => {
  console.log("[Disconnected from DB]");
});

module.exports = connection;
