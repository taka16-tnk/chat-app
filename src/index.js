const path = require('path');
const express = require('express');
const app = express();
const http = require('http');
const socketio = require('socket.io');

const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

let count = 0;

io.on('connection', (socket) => {
  console.log('New WebSocket connection')

  socket.emit('countUpdated', count);

  socket.on('increment', () => {
    count++;
    // socket.emit('countUpdated', count);
    io.emit('countUpdated', count); // リアルタイム更新となる
  });
});


server.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});
