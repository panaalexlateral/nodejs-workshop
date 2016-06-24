var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach(function(n) {
  console.log("n =", n);

  increment(n, function(result) {
    double(result, function (result) {
      pow2(result, function (result) {
        console.log("pow2(double(increment(" + n + ")))", result); // Christmas tree effect: https://goo.gl/AFbm1h
      });
    });
  });
});

//////////////////////////////

function increment(n, callback) {
  setTimeout(function() {
    callback(n + 1);
  }, randomDelay());
}

function double(n, callback) {
  setTimeout(function() {
    callback(n * 2);
  }, randomDelay());
}

function pow2(n, callback) {
  setTimeout(function() {
    callback(Math.pow(n, 2));
  }, randomDelay());
}

function randomDelay() {
  return 500 + Math.floor(Math.random() * 500);
}
