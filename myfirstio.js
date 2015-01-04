var fs = require("fs");
var file = process.argv[2]
var fileContents = fs.readFileSync(file);
var stringFileContents = fileContents.toString();
var arraySplitOnNewLines = stringFileContents.split("\n");
console.log(arraySplitOnNewLines.length - 1)