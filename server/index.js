const express = require('express')
const app = express()
const path = require('path')
const server = require('http').Server(app)
const io = require('socket.io')(server)
const config = require('./config')

app.use(express.static(path.join(__dirname, '../public')))
app.get('/', (req, res) => {
  res.sendFile('index.html')
})

const chat = io.of('/chat')
chat.on('connection', socket => {
  console.log('Websocket got connection from user', socket.id)

  socket.on('message', text => {
    const resp = Object.assign({}, text, { sender: socket.id })
    socket.emit('message', resp)
    socket.broadcast.emit('message', resp)
  })
})

server.listen(config.port, () => {
  console.log('Listening on port', config.port)
})
