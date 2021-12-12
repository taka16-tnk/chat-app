const path = require('path');
const express = require('express');
const app = express();
const http = require('http');
const socketio = require('socket.io');

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public');
const server = http.createServer(app)
const io = socketio(server)

app.use(express.static(publicDirectoryPath));

server.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});

io.on('connection', () => {
  console.log('New WebSocket connection')
})
