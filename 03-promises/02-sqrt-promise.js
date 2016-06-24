var q = require("q");

var numbers = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];

numbers.forEach(function(n) {
  console.log("n =", n);

  sqrt(n)
    .then(function(result) {
      console.log("sqrt(" + n + ") =", result);
    })

    .catch(function(error) {
      console.log(error);
    });
});


//////////////////////////////

function sqrt(n) {
  var deferred = q.defer();
  setTimeout(function() {
    if (n < 0) {
      deferred.reject("Can not calculate sqrt(" + n + ")");
      return;
    }

    deferred.resolve(Math.sqrt(n).toFixed(2));
  }, randomDelay());

  return deferred.promise;
}

function randomDelay() {
  return 500 + Math.floor(Math.random() * 500);
}
