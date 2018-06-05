import React, { Component } from 'react';
import Blogpost from './Blogpost'
import './App.css';

class App extends Component {
  render() {
    const title = React.createElement('hi', {}, 'My first react code')

    return (
      <div className="App">
         <video autoPlay loop id="video-background" muted plays-inline='true'>
            <source src="https://player.vimeo.com/external/158148793.hd.mp4?s=8e8741dbee251d5c35a759718d4b0976fbf38b6f&profile_id=119&oauth2_token_id=57447761" type="video/mp4"/>
          </video>
          <article>
            <h1> Testing Website Designs </h1>
          </article>
          <iframe src="https://giphy.com/embed/l3mZn8P7Pcakfw0Bq" width="480" height="368" frameBorder="0" className="giphy-embed" 
          allowFullScreen></iframe><p><a href="https://giphy.com/gifs/illustration-money-l3mZn8P7Pcakfw0Bq">via GIPHY</a></p>
          <iframe src="https://giphy.com/embed/5xtDarJ7d5HXTRULbSo" width="480" height="480" frameBorder="0" 
          className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/darylalexsy-shiba-inu-shibe-dogecoin-5xtDarJ7d5HXTRULbSo">via GIPHY</a></p>

          <Blogpost />
      </div>
    );
  }
}

export default App;
