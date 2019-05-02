var express = require('express');
var app = express();
var server = require('http').createServer(app);
var socketio = require('socket.io');
var io = socketio().listen(server);
var PORT = 3000;
var searchResult = "Hello from server.";
var fakeData = {type1: {
                        key1:"one",
                        key2:"two",
                        key3: "three"
                        },
                type2: {
                    keyA:"one",
                    keyB:"two",
                    keyC: "three"
                    }};

io.on("connection", function(socket){
    console.log("A new client has connected with the id" + socket.id + "!");
    
    socket.on("disconnect", function(){
        console.log("the client is disconnected!");
    });
    
    socket.on("Message", function(data){
        console.log("Message from client: " + data.message);
        
        // io.emit("Message", data);
        io.emit("Result", {result: searchResult});
    });
});

server.listen(PORT, function(){
    console.log("Listening on PORT " + PORT);
});

function searchData(keyword){

}
