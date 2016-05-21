var Client = require('./clients');

/*
 THIS PLACE IS FOR YOU.
 IMPLEMENT YOUR GAME SERVER HERE.
*/

var Server = function() {
    return {
        connection: function(id) {
            console.log('Client', id, 'connected!');
            console.log('Total:', Client().count());
            // Send welcome message
            Client().get(id).emit('welcome', id);
        },
        on: function(event, msg) {
            console.log('Server received');
            console.log('Event:', event, 'Message:', msg);
        },
        disconnect: function(id) {
            console.log('Client', id, 'disconnected!');
            console.log('Total:', Client().count());
        }
    }
}

module.exports = Server;
