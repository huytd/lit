# lit: a better WebSocket game server

:fire: **lit** is an experimental WebSocket game server based on [engine.io](https://github.com/socketio/engine.io)

**lit** is under development! there are still many things to do (benchmark, test,...) not ready for production yet!

## Why this?
Few months ago, I built a [cloned version of AgarIO](https://github.com/huytd/agar.io-clone). I'm still not happy with the networking part of the game yet. It still has some bug, laggy and unable to handle the large amount of players. So I decided to quit using Socket.IO and moved to a lower level library that built Socket.IO, it is Engine.IO, and focus on binary data oriented instead of transferring string data. Let's see will this implement will improve it or not.

## Features:

- Hashtable client management (for faster lookup)
- Binary data transmission

# License
Published under MIT License.
