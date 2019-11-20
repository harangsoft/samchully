var app = require('express')();
var http = require('http').createServer(app);

app.get('/', function (req, res) {
    res.send('<h1>Hello world</h1>');
});

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});