var http = require("http");

var url = process.argv[2];

http.get(url, function (response) {
		response.setEncoding("utf-8");
		var body = "";
		response.on("data", function (data) {
			body += data;
		});
		response.on("end", function () {
			console.log(body.length);
			console.log(body);
		});
		response.on("error", function (error) {

		});
});