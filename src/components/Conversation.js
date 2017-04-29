import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const MessageList = styled.ul`
  list-style-type: none;
  height: 400px;
  overflow-y: auto;
  border: 1px solid black;
`

const Message = styled.li`
  padding: 8px 2px;
`

const Sender = styled.span`
  font-weight: bold;
  color: #4b67ff;
  padding-right: 12px;
`

const Text = styled.span`

`

const renderMessages = messages =>
  messages.map((message, index) => (
    <Message key={index}>
      <Sender>{message.sender}</Sender>
      <Text>{message.text}</Text>
    </Message>
  ))

const Conversation = props => (
  <MessageList>
    {renderMessages(props.messages)}
  </MessageList>
)

Conversation.propTypes = {
  messages: PropTypes.array
}

export default Conversation
