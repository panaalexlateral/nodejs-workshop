var q = require("q");

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach(function(n) {
  console.log("n =", n);

  double(n).then(function(result) {
    console.log("double(" + n + ") =", result);
  });
});

//////////////////////////////

function double(n) {
  var deferred = q.defer();
  setTimeout(function() {
    deferred.resolve(n * 2);
  }, randomDelay());

  return deferred.promise;
}

function randomDelay() {
  return 500 + Math.floor(Math.random() * 500);
}
