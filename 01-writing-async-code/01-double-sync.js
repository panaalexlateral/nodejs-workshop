var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach(function(n) {
  console.log("double(" + n + ") =", double(n));
});

//////////////////////////////

function double(n) {
  return n * 2;
}
