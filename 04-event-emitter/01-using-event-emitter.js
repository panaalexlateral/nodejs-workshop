var EventEmitter = require("events").EventEmitter;

function Resource(c) {
  var emitter = new EventEmitter();
  process.nextTick(function() {
    emitter.emit("start");

    var count = 0;
    var interval = setInterval(function() {
      count++;
      emitter.emit("data", count);

      if (count === c) {
        emitter.emit("end");
        clearInterval(interval);
      }
    }, 500);
  });

  return emitter;
}

var resource = Resource(5);

resource.on("start", function() {
  console.log("I've started!");
});

resource.on("data", function(number) {
  console.log("I've received data: ", number);
});

resource.on("end", function() {
  console.log("I've finished!");
});
