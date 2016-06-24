var numbers = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];

numbers.forEach(function(n) {
  try {
    console.log("sqrt(" + n + ") =", sqrt(n));
  }
  catch (e) {
    console.log(e);
  }
});

//////////////////////////////

function sqrt(n) {
  if (n < 0) {
    throw Error("Can not calculate sqrt(" + n + ")");
  }

  return Math.sqrt(n).toFixed(2);
}
