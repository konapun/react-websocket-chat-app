import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import Conversation from './conversation'
import InputBox from './InputBox'

const Container = styled.div`
  padding: 6px;
  border: 2px solid black
`

const Chat = (props) => {
  return (
    <Container>
      <Conversation />
      <InputBox />
    </Container>
  )
}

Chat.propTypes = {

}

export default Chat
