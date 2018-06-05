import React, { Component } from 'react';
import './App.css';
import BackgroundSlideshow from 'react-background-slideshow'
import PropTypes from 'prop-types'
import Blog from './Blog'

export default class Chatarea extends Component {

	constructor(props){
		super(props)

    this.state = {
      text: '',
      savedText:[''],
      clicked: false,
      wordcount: 140
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
	}

  handleChange(ev){
    ev.preventDefault()
    this.setState({
      wordcount: 140 - ev.target.value.length,
      text: ev.target.value
    })
  }

  handleClick(ev){
    ev.preventDefault()
    if(this.state.text !== ''){
      this.setState({
       savedText: this.state.savedText.concat(this.state.text),
       clicked: true
      })
    }
    this.refs.txt.value = ''

  }

  enterPressed(event) {
    if(event.charCode === 13) { 
      this.handleClick(event)
    }
  } 

  removeBlog() {
    const newState = this.state.savedText.slice()
    newState.splice(-1,1)
    this.setState({
      savedText: newState
    })
  }

  render() {
  	const {title} = this.props
    return (
      <div className = "chatarea">
       <h5 className = 'titletext'>{title}</h5>
      {
        this.state.savedText!== ''? this.state.savedText.map((blog, i) => blog !== '' ? <Blog key = {i} post= {blog}/> : null ) : null
      }
       <form>
        From: <input type='text' id='name' />
        To: <input type='text' id='name' />
        <textarea onChange = {this.handleChange} id='input' ref='txt' cols='50' rows='30' onKeyPress={this.enterPressed.bind(this)} />
        <span> {this.state.wordcount} </span> 
        <input type='button' value='Post!' onClick = {this.handleClick}/>
        <input type='button' value='Remove!' onClick = {this.removeBlog.bind(this)}/>
       </form>
        
      </div>
    )
  }
}

Chatarea.propTypes = {
  title: PropTypes.string.isRequired
}
