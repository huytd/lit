# lit: a better WebSocket game server

<img src="http://img15.hostingpics.net/pics/113515lit.png" width="400">

**lit** is under development! There are still many things to do, it is not ready for production.

**Thank you so much [@Ulydev](https://github.com/ulydev) for the awesome logo!**

## Demo

I made a demo game using this library, [check it out](https://github.com/huytd/lit-demo)

## Why this?
Few months ago, I built a [cloned version of AgarIO](https://github.com/huytd/agar.io-clone). I'm still not happy with the networking part of the game yet. It still has some bugs, it's laggy and unable to handle the large amount of players. So I decided to quit using Socket.IO and moved to a lower level library called Engine.IO. It focuses on binary data  instead of string data, thus improving performance.

## Getting started:

#### Server

```
npm install
```
```
npm start
```

Backend logic is located in ```server.js```

#### Client

Navigate to ```http://localhost:3000/```

Game logic is located in ```public/js/game.js```

## License
Published under MIT License.
