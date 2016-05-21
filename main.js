var engine = require('engine.io');
var engineServer = engine.listen(5000);
var http = require('express')();
var Server = require('./server')();
var Client = require('./clients');

/*
 ATTENTION!!! THERE ARE NOTHING FOR YOU TO DO IN HERE
 PLEASE **** OFF!
*/

engineServer.on('connection', function(socket) {
	if (!Client().get(socket.id)) {
		Client().add(socket);
	}
	Server.connection(socket.id);

	socket.on('message', function(data){
        var stringified = data.toString('utf-8').replace(/\0/g, ''); // The ending \0 character is a bastard!!!
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

http.listen(3000, function(){
	console.log('Client is listening on :3000');
});
