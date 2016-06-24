module.exports = Animal;

//////////////////////////////

function Animal(name, numberOfLegs) {
  this.name = name;
  this.numberOfLegs = numberOfLegs;
}

Animal.prototype.eat = function() {
  console.log(this.name + " is eating.");
};

Animal.prototype.sleep = function() {
  console.log(this.name + " is sleeping.");
};

Animal.prototype.walk = function() {
  if (!this.numberOfLegs) {
    throw Error(this.name + " has no legs, and can't walk.");
  }

  console.log(this.name + " is walking.");
};
