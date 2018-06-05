import React, { Component } from 'react';
import Comment from './Comment'
import Chatarea from './Chatarea'
import './App.css';


export default class blogpost extends Component {
  render() {
  	const {title} = this.props
    return (
      <div className = "blogpost">
        <h1> {title} </h1>
        <Comment href = "http://www.google.com" description = "Google" />
        <Comment href = "http://www.reddit.com" description = "Reddit" />
        <Comment href = "http://www.reddit.com/Cryptocurrency" description = "Crypto" />
        <Chatarea title = "Chat Box" maxlength = {140} />
      </div>
    )
  }
}