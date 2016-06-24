var fs = require("fs");

if (fs.existsSync("temp")) {
  console.log("Temp directory exists, removing it..");
  if (fs.existsSync("temp/new.txt")) {
    fs.unlinkSync("temp/new.txt");
  }

  fs.rmdirSync("temp");
}

fs.mkdirSync("temp");
process.chdir("temp");
fs.writeFileSync("test.txt", "This is some test for the file.");
fs.renameSync("test.txt", "new.txt");
console.log("File size: " + fs.statSync("new.txt").size + " bytes");
console.log("File contents: " + fs.readFileSync("new.txt").toString());