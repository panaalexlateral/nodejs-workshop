var app = require("http").createServer(handler);
var io = require("socket.io")(app);
var fs = require("fs");

app.listen(8080);
console.log("Server running..");

function handler(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  if (request.url === "/mobile.html") {
    fs.createReadStream("mobile.html").pipe(response);
  } else {
    fs.createReadStream("desktop.html").pipe(response);
  }
}

io.on("connection", function (socket) {
  console.log("New connection");
  socket.on("orientationChange", function (data) {
    socket.broadcast.emit("orientationChange", data);
  });
});
