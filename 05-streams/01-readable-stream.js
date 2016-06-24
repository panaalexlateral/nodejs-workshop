var request = require("request");

var stream = request("http://www.google.com");

stream.on("data", function(chunk) {
  console.log(">>>Data>>> " + chunk);
});

stream.on("end", function() {
  console.log(">>>Done!>>>");
});
