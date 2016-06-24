var b = new Buffer("Hello");

console.log(b);

console.log(b.toString());

console.log(b.toString("base64"));

console.log(b.toString("utf-8", 0, 2));
