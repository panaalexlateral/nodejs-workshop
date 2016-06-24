var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var count = 0;

numbers.forEach(function(n) {
  console.log("n =", n);

  double(n, function(result) {
    console.log("double(" + n + ") =", result);
    count++;

    if (count == numbers.length) {
      console.log("end");
    }
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
