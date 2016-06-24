var fs = require("fs");
var https = require("https");

/**
 * https://docs.nodejitsu.com/articles/HTTP/servers/how-to-create-a-HTTPS-server
 */
var options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem")
};

/**
 * Request: readable stream
 * Response: writable stream
 */
https.createServer(options, function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  if (request.url === "/file.txt") {
    fs.createReadStream("file.txt").pipe(response);
  } else {
    response.end("Hello world!");
  }
}).listen(8080);

console.log("Server running..");
