import React, { Component } from 'react';
import './App.css';


export default class Blog extends Component {
  render() {
  	const {post} = this.props
    return (
      <div className = "blog">
       {post}
      </div>
    )
  }
}