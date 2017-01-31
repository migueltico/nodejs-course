const socketio = require('socket.io');
var io;
var guestNumber = 1;
var nicknames = {};
var namesUsed = [];
var currentRoom = {};

// Principal Functionality
exports.listen = function (server) {

  io = socketio.listen(server);

  io.sockets.on('connection', function(socket) {
  // asigna un nombre aleatorio a un nuevo usuario
    guestNumber = assignGuestName(socket, guestNumber, nicknames, namesUsed);
  // coloca al usuario en un room
    joinRoom(socket, 'Lobby');

    handleNameChangeAttempts(socket, nicknames, namesUsed);
    handleMessageBroadCasting(socket, nicknames);
    handleRoomJoining(socket);

    socket.on('rooms', function() {
      socket.emit('rooms', io.sockets.adapter.rooms)
    });
    handleDisconnection(socket, nicknames, namesUsed);
  });
}

// Functions

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
  // var usersInRoom = io.sockets.clients(room);
  var usersInRoom = io.nsps['/'].adapter.rooms[room]
  if (Object.keys(usersInRoom).length > 1) {
    var usersInRoomSummary = 'Users currently in '+room +':';
    for(var index in usersInRoom.sockets) {
      if (index !== socket.id) {
        if (index > 0) {
          usersInRoomSummary += ', ';
        }
        usersInRoomSummary += nicknames[index];
      }
    }
    usersInRoomSummary += '.';
    console.log(usersInRoomSummary);
    socket.emit('message', {text: usersInRoomSummary});
  }
}

function handleNameChangeAttempts(socket, nicknames, namesUsed) {
  socket.on('nameAttempt', function (name) {
    if (name.indexOf('Guest')===0) {
      socket.emit('nameResult', {
        success: false,
        message: 'Names cannot begin with Guess'
      });
    }else{
      if (namesUsed.indexOf(name) === -1) {
        var previousName = nicknames[socket.id];
        var previousNameIndex = namesUsed.indexOf(previousName);
        namesUsed.push(name);
        nicknames[socket.id] = name;
        delete namesUsed[previousNameIndex];
        socket.emit('nameResult', {
          success: true,
          message: name
        });
        socket.broadcast.to(currentRoom[socket.id]).emit('message', {
          text: previousName + ' is now know as '+ name +' .'
        });
      }else{
        socket.emit('nameResult', {
          success: true,
          message: 'That name is already in use'
        });
      }
    }
  })
}

function handleMessageBroadCasting(socket) {
  socket.on('message', function (message) {
    socket.broadcast.to(message.room).emit('message', {
      text: nicknames[socket.id] + ': '+ message.text
    })
  })
}

function handleRoomJoining(socket) {
  socket.on('join', function (room) {
    socket.leave(currentRoom[socket.id]);
    joinRoom(socket, room.newRoom);
  });
}

function handleDisconnection(socket) {
  socket.on('disconnection', function () {
    var nameIndex = namesUsed.indexOf(nicknames[socket.id]);
    delete namesUsed[nameIndex];
    delete nicknames[socket.id];
  })
}
