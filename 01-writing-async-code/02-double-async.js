var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach(function(n) {
  console.log("n =", n);
  double(n, function(result) {
    console.log("double(" + n + ") =", result);
  });
});

//////////////////////////////

function double(n, callback) {
  setTimeout(function() {
    callback(n * 2);
  }, randomDelay());
}

function randomDelay() {
  return 500 + Math.floor(Math.random() * 500);
}
