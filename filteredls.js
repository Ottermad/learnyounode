var fs = require("fs");
var path = require("path");
var dir = process.argv[2];
var file_extenstion = process.argv[3];
var listing = fs.readdir(dir, function (error, dir_list) {
	if (error) {

	} else {
			dir_list = dir_list.reverse();
			for (var i = dir_list.length - 1; i >= 0; i--) {
			if (path.extname(dir_list[i]) === "." + file_extenstion) {
				console.log(dir_list[i])
			}
		};
	}
});