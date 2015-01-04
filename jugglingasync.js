var http = require("http");

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

http.get(url1, function (response) {
		response.setEncoding("utf-8");
		var body = "";
		response.on("data", function (data) {
			body += data;
		});
		response.on("end", function () {
			console.log(body);

			http.get(url2, function (response) {
		response.setEncoding("utf-8");
		var body = "";
		response.on("data", function (data) {
			body += data;
		});
		response.on("end", function () {
			console.log(body);
			
			http.get(url3, function (response) {
					response.setEncoding("utf-8");
					var body = "";
					response.on("data", function (data) {
						body += data;
					});
					response.on("end", function () {
						console.log(body);
					});
					response.on("error", function (error) {

					});
			});
		});
		response.on("error", function (error) {

		});
			});

		});
		response.on("error", function (error) {

		});
});



