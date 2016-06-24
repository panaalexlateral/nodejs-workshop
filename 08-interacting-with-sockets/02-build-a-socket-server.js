var app = require("http").createServer(handler);
var io = require("socket.io")(app);
var fs = require("fs");

app.listen(8080);
console.log("Server running..");

function handler(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  fs.createReadStream("index.html").pipe(response);
}

io.on("connection", function (socket) {
  socket.emit("serverNews", {message: "Message from the server."});
  socket.on("clientNews", function (data) {
    console.log(data);
  });
});
