process.stdin.setEncoding("utf8");

process.stdin.on("readable", function() {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(chunk);
  }
});

process.stdin.on("end", function() {
  process.stdout.write("end");
});

process.on('SIGTERM', function() {
  process.stdout.write("Why are you trying to terminate me?");
});

console.log("Node is running as process #" + process.pid);
