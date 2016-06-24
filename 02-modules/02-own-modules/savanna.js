var Animal = require("./animal");
var Predator = require("./predator");

var zebra = new Animal("Zach", 4);

zebra.eat();
zebra.sleep();
zebra.walk();

//var snake = new Animal("Simon");
//snake.eat();
//snake.sleep();
//snake.walk();

var lion = new Predator("Larry", 4);

lion.eat();
lion.sleep();
lion.walk();
lion.hunt(function(message) {
  console.log(message);
});
