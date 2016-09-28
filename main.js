var engine = require('engine.io');
var engineServer = engine.listen(5000);
var http = require('express')();
var Server = require('./server')();
var Client = require('./clients');

var config  = require('./config.json');

/*
Socket backend - This part should not be edited
*/

engineServer.on('connection', function(socket) {

	if (!Client().get(socket.id)) {
		Client().add(socket);
	}
	Server.connection(socket.id);

	socket.on('message', function(data){
		var stringified = data.toString('utf-8').replace(/\0/g, ''); //Take \0 ending character into account
		var req = JSON.parse(stringified);
		Server.on(req.event, req.message);
	});

	socket.on('close', function(){
		if (Client().get(socket.id)) {
			Client().remove(socket.id);
			Server.disconnect(socket.id);
		}
	});

});

// CLIENT

http.use(require('express').static('public'));

http.get('/', function(req, res) {
	res.sendFile('public/index.html');
});

var port = process.env.PORT || config.port;
http.listen(3000, function(){
	console.log('Server is listening on port 3000');
});
