var util = require("util");
var EventEmitter = require("events").EventEmitter;

//////////////////////////////

function Resource(c) {
  var self = this;

  process.nextTick(function() {
    self.emit("start");

    var count = 0;
    var interval = setInterval(function () {
      count++;
      self.emit("data", count);

      if (count === c) {
        self.emit("end");
        clearInterval(interval);
      }
    }, 500);
  });
}

util.inherits(Resource, EventEmitter);
module.exports = Resource;
