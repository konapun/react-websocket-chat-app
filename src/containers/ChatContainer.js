import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ConversationContainer from './ConversationContainer'
import InputBox from '../components/InputBox'

const Container = styled.div`
  padding: 6px;
`

class ChatContainer extends React.Component {
  onSend(input) {
    const val = input.getValue()
    input.clear()

    const socket = this.props.socket
    socket.emit('message', { text: val })
  }

  render() {
    return (
      <Container>
        <ConversationContainer socket={this.props.socket} />
        <InputBox onSend={input => this.onSend(input)} />
      </Container>
    )
  }
}

ChatContainer.propTypes = {
  socket: PropTypes.object.isRequired
}

export default ChatContainer
