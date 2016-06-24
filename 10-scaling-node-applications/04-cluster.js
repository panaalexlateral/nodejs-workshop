var cluster = require("cluster");
var http = require("http");
var workerCount = 3;

if (cluster.isMaster) {

  // Create workers
  for (var i = 0; i < workerCount; i++) {
    console.log("master: I'm creating a new worker.");
    cluster.fork();
  }

  cluster.on("fork", function(worker) {
    console.log("master: a worker was created (worker " + worker.id + ")");
  });

  cluster.on("online", function(worker) {
    console.log("master: worker is online (worker " + worker.id + ")");
  });

  cluster.on("listening", function(worker, address) {
    console.log("master: worker (worker " + worker.id +  ", pid " + worker.process.pid + ", " + address.address + ":" + address.port + ") ");
  });

  cluster.on("exit", function(worker) {
    console.log("master: worker exited (worker " + worker.id + ")");
  });
}

else {

  console.log("worker: worker " + cluster.worker.id + " is ready!");
  var count = 0;

  // Workers can share any TCP connection
  http.createServer(function(request, response) {
    response.writeHead(200);
    count++;

    console.log("worker: worker " + cluster.worker.id + " is incrementing count to " + count);
    response.end("Hello from worker "  + cluster.worker.id + ", count = " + count);

    if (count === 3) {
      cluster.worker.destroy();
    }
  }).listen(8080, "localhost");
}
