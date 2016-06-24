var request = require("request");

var stream = request("http://www.google.com");

stream.pipe(process.stdout);
