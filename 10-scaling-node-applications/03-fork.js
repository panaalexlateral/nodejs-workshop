var fork = require("child_process").fork;
var child = fork(__dirname + "/student.js");

child.on("message", function(message) {
  console.log("The answer is: ", message.answer);
  child.send({cmd: "done"});
});

child.send({cmd: "double", number: 20});
