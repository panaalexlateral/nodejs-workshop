var Resource = require("./resource");
var resource = new Resource(5);

resource.on("start", function() {
  console.log("I've started!");
});

resource.on("data", function(number) {
  console.log("I've received data: ", number);
});

resource.on("end", function() {
  console.log("I've finished!");
});
