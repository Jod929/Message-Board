import React, { Component } from 'react';

class Messages extends React.Component {
  constructor(props) {
    super(props);
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
              return (
                <div>
                <h1>message</h1>
                <h2>from: {message.name}</h2>
                <p>{message.message}</p>
                </div>

              )
            })}
          </div>
        )
      }
    }

  }
}

export default Messages;