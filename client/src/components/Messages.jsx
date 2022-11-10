import React, { Component } from 'react';

class Messages extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name, message) {


    let messageInfo = {
      name: name,
      message: message
    }

    this.props.deleteMessage(messageInfo);
  }



  componentDidMount() {
    this.props.getAllMessage();
  }

  render() {
    {
      if (this.props.messages.length === 0) {
        return (
          <div>
            loading
          </div>
        )
      } else {
        return (
          <div>
            {this.props.messages.map((message) => {

              if (this.props.currentUser === message.name) {
                return (
                  <div>
                  <h1>message</h1>
                  <h2>from: {message.name}</h2>
                  <p>{message.message}</p>
                  <button onClick={() => this.handleClick(message.name, message.message)}>Delete</button>
                </div>
                )
              } else {
                return (
                  <div>
                    <h1>message</h1>
                    <h2>from: {message.name}</h2>
                    <p>{message.message}</p>
                  </div>
                )
              }

            })}
          </div>
        )
      }
    }

  }
}

export default Messages;