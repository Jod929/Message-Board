import React, { Component } from 'react';

class Messages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      oldMessage: '',
      newMessage: '',
      name: ''
    }

    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this)
  }

  handleDelete(name, message) {

    let messageInfo = {
      name: name,
      message: message
    }

    this.props.deleteMessage(messageInfo);
  }

  handleEdit(name, oldMessage) {

    this.setState({
      name: name,
      oldMessage: oldMessage
    })

  }

  handleEditSubmit(e) {
    e.preventDefault();

    this.props.editMessage(this.state);
    // console.log(this.state);
  }

  handleChange(e) {
    let value = e.target.value;

    this.setState({
      [e.target.name]: value
    })
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

              if (this.props.currentUser === message.name && this.state.oldMessage !== message.message) {
                return (
                  <div>
                  <h2>from: {message.name}</h2>
                  <p>{message.message}</p>
                  <button onClick={() => this.handleDelete(message.name, message.message)}>Delete</button>
                  <button onClick={() => this.handleEdit(message.name, message.message)}>Edit</button>
                </div>
                )
              } else if (message.message === this.state.oldMessage) {

                return (
                  <div>
                    <form onSubmit={this.handleEditSubmit}>
                      <label>
                        edit message
                        <input name="newMessage" value={this.state.newMessage} onChange={this.handleChange}></input>
                      </label>

                      <input type="submit"></input>
                    </form>
                  </div>
                  )
              } else {
                return (
                  <div>
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