var http = require("http");

var options = {
  host: "www.google.com",
  port: 80,
  path: "/",
  method: "GET"
};

console.log("Going to make request..");

/**
 * Request: writable stream
 * Response: readable stream
 */
var request = http.get("http://www.lateral-inc.com", function(response) {
  console.log(response.statusCode);
  response.pipe(process.stdout);
});
