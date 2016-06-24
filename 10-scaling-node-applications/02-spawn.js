var spawn = require("child_process").spawn;

var ps = spawn("ps", ["ax"]); // has stdin, stdout & stderr streams
var grep = spawn("grep", ["node"]); // has stdin, stdout & stderr streams

ps.stdout.pipe(grep.stdin);
grep.stdout.pipe(process.stdout);

ps.stderr.on("data", function (data) {
  console.log("ps stderr: " + data);
});

grep.stderr.on("data", function (data) {
  console.log("grep stderr: " + data);
});
