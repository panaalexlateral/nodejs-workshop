process.on("message", function(message) {
  if (message.cmd === "double") {
    console.log("Student: I was asked to touble " + message.number);
    process.send({answer: message.number * 2});
  } else if (message.cmd === "done") {
    process.exit();
  }
});
