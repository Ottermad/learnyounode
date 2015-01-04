var fs = require("fs");
var file = process.argv[2]
var fileContents = fs.readFile(file, function (error, data) {
	if (error) {

	} else {
		var stringFileContents = data	.toString();
		var arraySplitOnNewLines = stringFileContents.split("\n");
		console.log(arraySplitOnNewLines.length - 1)
	}
});