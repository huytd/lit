global.SOCKET_CLIENTS = {};
var Client = function() {
	return {
        add: function(socket) {
            global.SOCKET_CLIENTS[socket.id] = socket;
        },
        remove: function(socketId) {
            delete global.SOCKET_CLIENTS[socketId];
        },
        count: function() {
            return Object.keys(global.SOCKET_CLIENTS).length;
        },
        get: function(id) {
            if (!global.SOCKET_CLIENTS[id]) return null;
            return {
                emit: function(eventName, data) {
                    if (global.SOCKET_CLIENTS[id]) {
                        global.SOCKET_CLIENTS[id].send(Buffer.from(JSON.stringify({ event: eventName, message: data })));
                    }
        		},
        		broadcast: function(eventName, data) {
        			Object.keys(global.SOCKET_CLIENTS).each(function(cid) {
        				if (cid != id) {
        					global.SOCKET_CLIENTS[cid].send(Buffer.from(JSON.stringify({ event: eventName, message: data })));
        				}
        			});
        		}
            }
        }
	}
}
module.exports = Client;
