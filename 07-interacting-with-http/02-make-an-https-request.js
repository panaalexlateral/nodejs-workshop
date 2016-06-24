var https = require("https");

var options = {
  host: "github.com",
  port: 443,
  path: "/",
  method: "GET"
};

console.log("Going to make request..");

/**
 * Request: writable stream
 * Response: readable stream
 */
var request = https.get("https://github.com", function(response) {
  console.log(response.statusCode);
  response.pipe(process.stdout);
});
