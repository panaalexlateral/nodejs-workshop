var should = require("should");
var Animal = require("../02-modules/02-own-modules/animal.js");
var Predator = require("../02-modules/02-own-modules/predator.js");

describe("Animal", function () {
  var zebra = new Animal("Zach", 4);
  var snake = new Animal("Simon");

  describe("construct()", function () {
    it("should set the name and number of legs correctly", function () {
      zebra.name.should.equal("Zach");
      zebra.numberOfLegs.should.equal(4);
    });
  });

  describe("walk()", function () {
    it("should throw an exception if animal has no legs", function () {
      (function() {
        snake.walk();
      }).should.throw(/has no legs/);
    });
  });
});

describe("Predator", function () {
  var lion = new Predator("Larry", 4);

  describe("construct()", function () {
    it("should set the name and number of legs correctly", function () {
      lion.name.should.equal("Larry");
      lion.numberOfLegs.should.equal(4);
    });
  });

  describe("hunt()", function hunt() {
    it("should return a message asynchronously", function (done) {
      lion.hunt(function(message) {
        message.should.equal("Larry hunted a zebra.");
        done();
      });
    });
  });
});
