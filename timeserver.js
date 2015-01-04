var net = require("net");

var port = process.argv[2]

var server = net.createServer(function (socket) {
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	if (month < 10) {
		month = "0" + month;
	} 
	if (day < 10) {
		day = "0" + day;
	}
	if (hours < 10) {
		hours = "0" + hours;
	}
	var dateString = year + "-" + month + "-" + day + " " + hours + ":" + minutes + "\n";	 
	socket.end(dateString);
});
server.listen(port);