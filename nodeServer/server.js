var express = require('express');
var app = express();
var server = require('http').createServer(app);
var socketio = require('socket.io');
var io = socketio().listen(server);
var PORT = 3000;
var searchResult = {
    Butter: {
        'Vitamin A - IU': 2499,
        'Vitamin C': 0.0,
        'Vitamin B12': 0.17,
        'Vitamin B6': 0.003,
        'Vitamin A - RAE': 684,
        'Vitamin E': 2.32,
        'Vitamin K': 7.0
    },
    Cheese: {
        'Vitamin A - IU': 1265,
        'Vitamin C': 0.0,
        'Vitamin B12': 0.25,
        'Vitamin B6': 0.035,
        'Vitamin A - RAE': 362,
        'Vitamin E': 0.65,
        'Vitamin K': 3.4
    },
    Lingcod: {
        'Vitamin A - IU': 58,
        'Vitamin C': 0.0,
        'Vitamin B12': 4.15,
        'Vitamin B6': 0.346,
        'Vitamin A - RAE': 17,
        'Vitamin E': 0.0,
        'Vitamin K': 0.0
    }
};

io.on("connection", function (socket) {
    console.log("A new client has connected with the id" + socket.id + "!");

    socket.on("disconnect", function () {
        console.log("the client is disconnected!");
    });

    socket.on("Message", function (data) {
        console.log("Message from client: " + data);

        // io.emit("Message", data);
        io.emit("Result", {
            result: searchResult
        });
    });
});

server.listen(PORT, function () {
    console.log("Listening on PORT " + PORT);
});

function searchData(keyword) {
    // search function.
}