import React, { Component } from 'react';
import './video.css';

export default class Video extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="video">
        <h1 className="title">{this.props.video.title}</h1>
        <h2 className="physician">{this.props.video.physician}</h2>
        <iframe 
          src={this.props.video.url} allowFullScreen>
        </iframe>
      </div>
    );
  }
}