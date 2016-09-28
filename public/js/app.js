//

var socket;

//

var playerName;

var btn;
var nickErrorText;
var playerNameInput;

//

var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;

var c = document.getElementById('cvs');
var canvas = c.getContext('2d');
c.width = screenWidth; c.height = screenHeight;

var KEY_ENTER = 13;

//

var game = new Game();

//

function startGame() {
  document.getElementById('gameAreaWrapper').style.display = 'block';
  document.getElementById('startMenuWrapper').style.display = 'none';

  playerName = playerNameInput.value.replace(/(<([^>]+)>)/ig, '');

  //Set up socket
  socket = new eio.Socket('ws://localhost:5000/');
  game.handleNetwork(socket);

  //Start loop
  windowLoop();
}

function windowLoop () {
  requestAnimFrame(windowLoop);
  gameLoop();
}

function gameLoop () {
  game.handleLogic();
  game.handleGraphics(canvas);
}

//Check nick and start game
function checkNick() {
  if (validNick()) {
      startGame();
  } else {
      nickErrorText.style.display = 'inline';
  }
}

//Check if nick is alphanumeric
function validNick() {
  var regex = /^\w*$/;
  console.log('Regex Test', regex.exec(playerNameInput.value));
  return regex.exec(playerNameInput.value) !== null;
}

//Set up form
window.onload = function() {
  'use strict';

  btn = document.getElementById('startButton');
  nickErrorText = document.querySelector('#startMenu .input-error');
  playerNameInput = document.getElementById('playerNameInput')

  btn.onclick = checkNick; //Check nick on click

  playerNameInput.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;

    if (key === KEY_ENTER) {
      checkNick();
    }
  });
};

//Define animation frame
window.requestAnimFrame = (function () {
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

//Resize event
window.addEventListener('resize', function() {
  screenWidth = window.innerWidth;
  screenHeight = window.innerHeight;
  c.width = screenWidth;
  c.height = screenHeight;
}, true);
