var fs = require("fs");

if (fs.existsSync("temp")) {
  console.log("Temp directory exists, removing it..");
  if (fs.existsSync("temp/new.txt")) {
    fs.unlinkSync("temp/new.txt");
  }

  fs.rmdirSync("temp");
}

fs.mkdir("temp", function() {
  process.chdir("temp");
  fs.writeFile("test.txt", "This is some test for the file.", function() {
    fs.rename("test.txt", "new.txt", function() {
      fs.stat("new.txt", function(error, stats) {
        console.log("File size: " + stats.size + " bytes");
        fs.readFile("new.txt", function(error, data) {
          console.log("File contents: " + data.toString());
        });
      });
    });
  });
});
