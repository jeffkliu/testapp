import React, { Component } from 'react';
import './App.css';


export default class Comment extends Component {
  render() {
  	const {href, description} = this.props
    return (
      <div className = "comment">
       <a href={href}> {description} </a>
      </div>
    )
  }
}