const socketio = require('socket.io');
var io;
var guestNumber = 1;
var nicknames = {};
var namesUsed = [];
var currentRoom = {};

exports.listen = function (server) {
  io = socketio.listen(server);

  // io.set('log level 1');

  io.sockets.on('connection', function(socket) {
    // asigna un nombre aleatorio a un nuevo usuario
    guestNumber = assignGuestName(socket,  guestNumber, nicknames, namesUsed);
    // coloca al usuario en un room
    joinRoom(socket, 'Lobby');

    handleMessageBroadCasting(socket, nicknames);
    hanldeNameChangeAttempts(socket, nicknames, namesUsed);
    handleRoomJoining(socket);

    socket.on('rooms', function() {
      socket.emit('rooms', io.sockets.manager.rooms)
    });

    handleDisconnection(socket, nicknames, namesUsed);
  });
}

function assignGuestName(socket, guestNumber, nicknames, namesUsed) {
  var name = 'Guest' + guestNumber;
  nicknames[socket.id] = name;
  socket.emit('nameResult', {
    success: true,
    name: name
  })
  namesUsed.push(name);
  return guestNumber + 1;
}

function joinRoom(socket, room) {
  socket.join(room);
  currentRoom[socket.id] = room;
  socket.emit('joinResult', {room: room});
  socket.broadcast.to(room).emit('message', {
    text: nicknames[socket.id] + 'ha entrado en la sala' + room + '.'
  });
  var usersInRoom = io.sockets.clients(room);
}
