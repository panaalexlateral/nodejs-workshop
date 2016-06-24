var q = require("q");

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var promises = [];

numbers.forEach(function(n) {
  console.log("n =", n);

  var promise = double(n);
  promises.push(promise);

  promise.then(function(result) {
    console.log("double(" + n + ") =", result);
  });
});

q.all(promises).then(function() {
  console.log("end");
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
