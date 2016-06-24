var q = require("q");

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach(function(n) {
  console.log("n =", n);

  increment(n)
    .then(double)
    .then(pow2)
    .then(function(result) {
      console.log("pow2(double(increment(" + n + ")))", result)
    });
});

//////////////////////////////

function increment(n) {
  var deferred = q.defer();
  setTimeout(function() {
    deferred.resolve(n + 1);
  }, randomDelay());

  return deferred.promise;
}

function double(n) {
  var deferred = q.defer();
  setTimeout(function() {
    deferred.resolve(n * 2);
  }, randomDelay());

  return deferred.promise;
}

function pow2(n) {
  var deferred = q.defer();
  setTimeout(function() {
    deferred.resolve(Math.pow(n, 2));
  }, randomDelay());

  return deferred.promise;
}

function randomDelay() {
  return 500 + Math.floor(Math.random() * 500);
}
