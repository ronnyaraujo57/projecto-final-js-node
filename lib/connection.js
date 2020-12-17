const mysql = require('mysql');

var con = mysql.createConnection({
  host: "remotemysql.com",
  user: "KWmY0QWrAD",
  password: "jtu4KrzYNL",
  database: "KWmY0QWrAD"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con;