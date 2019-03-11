var app = require('express')();
var http = require('http').Server(app);     // Express initializes app to be a function handler that you can supply to an HTTP server
var io = require('socket.io')(http);        // Initialize a new instance of socket.io by passing the http object

app.get('/', function(req, res){            // Define a route handler / that gets called when we hit our website home
    res.sendFile(__dirname + '/index.html');   
});

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      io.emit('chat message', msg);
      console.log('Message: ' + msg);
    });
  });

http.listen(3000, function(){               // We make the http server listen on port 3000.
    console.log('listening on *:3000');
});