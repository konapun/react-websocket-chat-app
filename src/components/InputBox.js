import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const blue = '#02a8dd'

const Container = styled.div`
  margin: 1em;
`

const Input = styled.input`
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${blue}
  border-radius: 3px;
`

const SubmitButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  color: #fff;
  border: 2px solid ${blue};
  background-color: ${blue};
  border-radius: 3px;
`

class InputBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  clear() {
    this.setState({
      value: ''
    })
  }

  getValue() {
    return this.state.value
  }

  _handleKeyPress(e) {
    if (e.key === 'Enter') {
      this._handleOnSend()
    }
  }

  _handleOnSend() {
    this.props.onSend(this)
  }

  render() {
    return (
      <Container>
        <Input value={this.state.value}
          onChange={(event) => this.setState({ value: event.target.value })}
          onKeyPress={(e) => this._handleKeyPress(e)} />
        <SubmitButton onClick={() => this._handleOnSend()}>Send</SubmitButton>
      </Container>
    )
  }
}

InputBox.propTypes = {
  onSend: PropTypes.func.isRequired
}

export default InputBox
