var fs = require("fs");
var http = require("http");

/**
 * Request: readable stream
 * Response: writable stream
 */
http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  if (request.url === "/file.txt") {
    fs.createReadStream("file.txt").pipe(response);
  } else {
    response.end("Hello world!");
  }
}).listen(8080);

console.log("Server running..");
