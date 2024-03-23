const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('a user connected');

  // Send the current number of online visitors to the new client
  io.emit('online visitors', io.engine.clientsCount);

  // When a client disconnects, update the number of online visitors
  socket.on('disconnect', () => {
    console.log('user disconnected');
    io.emit('online visitors', io.engine.clientsCount);
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
