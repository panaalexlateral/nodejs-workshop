var mysql      = require("mysql");
var connection = mysql.createConnection({
  host     : "localhost",
  user     : "root",
  password : "mysql",
  database : "nodejs-workshop"
});

connection.connect();

var query = connection.query("SELECT * FROM users");
query
  .on("result", function(row) {
    console.log(row);
  })

  .on("end", function() {
    console.log("End");
  })

  .on("error", function(error) {
    console.log(error);
  });

connection.end();
