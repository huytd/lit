function Game () { };

Game.prototype.handleNetwork = function(socket) {
  //Network callback

  socket.on('open', function() {
    socket.on('message', function(data) {
      console.log('Received:', BufferUtil().toString(data));
      socket.send(BufferUtil().from(JSON.stringify({
          event: 'reply',
          message: {
            text: 'Hey there, server! My name is ' + playerName
          }
      })));
    });
    socket.on('close', function(){});
  });
}

Game.prototype.handleLogic = function() {
  //Update loop

  console.log('Game updated');
}

Game.prototype.handleGraphics = function(graphics) {
  //Draw loop

  graphics.fillStyle = '#fbfcfc';
  graphics.fillRect(0, 0, screenWidth, screenHeight);

  graphics.fillStyle = '#2ecc71';
  graphics.strokeStyle = '#27ae60';
  graphics.font = 'bold 50px Verdana';
  graphics.textAlign = 'center';
  graphics.lineWidth = 2;
  graphics.fillText('Connected as ' + playerName, screenWidth / 2, screenHeight / 2);
  graphics.strokeText('Connected as ' + playerName, screenWidth / 2, screenHeight / 2);
}
