var dns = require("dns");

dns.lookup("nodejs.org", function (err, addresses) {
  console.log("addresses:", addresses);
});
