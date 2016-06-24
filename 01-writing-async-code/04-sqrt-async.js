var numbers = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];

numbers.forEach(function(n) {
  console.log("n =", n);

  sqrt(n, function(error, result) {
    if (error) {
      console.log(error);
      return;
    }

    console.log("sqrt(" + n + ") =", result);
  });
});

//////////////////////////////

function sqrt(n, callback) {
  setTimeout(function() {
    if (n < 0) {
      callback("Can not calculate sqrt(" + n + ")", undefined);
      return;
    }

    callback(undefined, Math.sqrt(n).toFixed(2));
  }, randomDelay());
}

function randomDelay() {
  return 500 + Math.floor(Math.random() * 500);
}
