const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const model = require('./model');
const Chat = model.getModel('chat');
const app = express();

const PORT = process.env.PORT || 5000;

// work with express
const server = require('http').Server(app);
const io = require('socket.io')(server);

// app.use(express.static(__dirname + '/../../build'))

io.on('connection', function (socket) {
    console.log('connection established');
    socket.on('sendmsg', function (data) {
       const {from, to, msg} = data;
       const chatId = [from, to].sort().join('_');
       Chat.create({chat_id:chatId, from:from, to:to, content:msg}, function (err, doc) {
           io.emit('recvmsg', Object.assign({}, doc._doc));
       })

    })
});
const userRouter = require('./user');


app.use(cookieParser());
app.use(bodyParser.json());
app.use('/user', userRouter);


server.listen(PORT, function(){
    console.log('listining to port ' + PORT);
});