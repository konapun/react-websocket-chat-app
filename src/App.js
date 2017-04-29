import React, { Component } from 'react'
import ChatContainer from './containers/ChatContainer'
import io from 'socket.io-client'

const url = 'ws://localhost:3030/chat'
const socket = io(url)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {}
    }
  }

  componentDidMount() {
    socket.on('message', (data) => {
      this.setState({ data })
    })
  }

  render() {
    return (
      <ChatContainer socket={socket} />
    )
  }
}

export default App
