var Animal = require("./animal");
var util = require("util");

module.exports = Predator;

//////////////////////////////

function Predator(name, numberOfLegs) {
  this.constructor.super_.call(this, name, numberOfLegs);
}

util.inherits(Predator, Animal);

Predator.prototype.hunt = function(callback) {
  console.log(this.name + " is hunting..");
  setTimeout(function() {
    callback(this.name + " hunted a zebra.");
  }.bind(this), 1000);
};
