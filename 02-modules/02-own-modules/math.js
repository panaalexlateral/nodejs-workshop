module.exports = {
	add: add,
	sqrt: sqrt
};

//////////////////////////////


function add(a,b)
{
	return a+b;
}

function sqrt(a) {
  if (a < 0) {
    throw Error("Can not calculate sqrt(" + a + ")");
  }

  return Math.sqrt(a).toFixed(2);
}


function random(min,max)
{
	return Math.floor(Math.random()*(max-min+1)+min);
}

function addAsync(a,b)
{
	setTimeout(function() {
	    callback(n * 2);
	}, randomDelay());
}

function sqrtAsync(n, callback) {
  setTimeout(function() {
    if (n < 0) {
      callback("Can not calculate sqrt(" + n + ")", undefined);
      return;
    }

    callback(undefined, Math.sqrt(n).toFixed(2));
  }, randomDelay());
}

function randomAsync(min,max)
{
	setTimeout(function() {
	    callback(Math.floor(Math.random()*(max-min+1)+min));
	}, randomDelay());
}

function randomDelay() {
  return 500 + Math.floor(Math.random() * 500);
}

