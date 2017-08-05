var http = require('http');

var PORT = 7000;

function handleRequest(req, res){
	res.end("Let's Be Awesome!! ");
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
	console.log("listening on: http://localhost:%s", PORT);
});