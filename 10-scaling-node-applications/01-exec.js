var exec = require("child_process").exec;

var child = exec("uptime", function(error, stdout, stderr) {
  if (error) {
    console.log("Error: " + stderr);
  } else {
    console.log("Output is: " + stdout);
  }
});

console.log("PID is " + child.pid);
