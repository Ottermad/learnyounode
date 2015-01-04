var fs = require("fs");
var path = require("path");

module.exports = function (dir, file_extenstion, callback	) {
	fs.readdir(dir, function (error, dir_list) {
		if (error) {
			return callback(error);
		} else {
				new_array = []
				dir_list = dir_list.reverse();
				for (var i = dir_list.length - 1; i >= 0; i--) {
				if (path.extname(dir_list[i]) === "." + file_extenstion) {
					console.log(dir_list[i])
					new_array.push(dir_list[i])
				}
			};
		}
		return callback(null, new_array);
	});
}

