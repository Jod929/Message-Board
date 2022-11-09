import React, { Component } from 'react';

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let value = e.target.value;

    this.setState({
      [e.target.name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    let userInfo = {
      username: this.props.user,
      message: this.state.message
    };

    this.props.postMessage(userInfo)
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            enter a message

            <input name="message" value={this.state.message} onChange={this.handleChange}></input>

            <input type="submit"></input>
          </label>
        </form>
      </div>
    )
  }
}

export default Post;