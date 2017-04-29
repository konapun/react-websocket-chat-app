import React from 'react'
import PropTypes from 'prop-types'
import Conversation from '../components/Conversation'

class ConversationContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: []
    }
  }

  componentDidMount() {
    const socket = this.props.socket

    socket.on('message', message => {
      this.setState({ messages: this.state.messages.concat(message) })
    })
  }

  render() {
    return (
      <Conversation messages={this.state.messages} />
    )
  }
}

ConversationContainer.propTypes = {
  socket: PropTypes.object.isRequired
}

export default ConversationContainer
