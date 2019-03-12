var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongoose = require('mongoose');

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var DB_USER = 'user';
var DB_PASSWORD = encodeURIComponent('253531167@Hot');

var dbUrl = `mongodb://${DB_USER}:${DB_PASSWORD}@ds153495.mlab.com:53495/learning-node-v2`;

var Message = mongoose.model('Message', {
    name: String,
    message: String
});

app.get('/messages', (req, res) => {
    Message.find({}, (err, messages) =>{
        res.send(messages);
    });
});

app.post('/messages', async (req, res) => {

    try {

        var message = new Message(req.body);

        var savedMessage = await message.save();

        console.log('saved');

        var censored = await Message.findOne({message: 'badword'});
            if(censored) 
                await Message.deleteOne({_id: censored.id});
            else
                io.emit('message', req.body);
        res.sendStatus(200);
    } catch (error) {
        res.sendStatus(500);
        return console.error(error);
    } finally {
        console.log('message post called');
    }

});

io.on('connection', (socket) => {
    console.log("a user connected");
});

mongoose.connect(dbUrl,{ useNewUrlParser: true }, (err) => {
    console.log('mongo db connection', err);
});

var server = http.listen(3000, () => {
    console.log('server is listening on port', server.address().port);
});