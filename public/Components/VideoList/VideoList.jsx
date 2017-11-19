import React, { Component } from 'react';
import Video from '../Video/Video.jsx';

import './videoList.css';

export default class VideoList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const videos = this.props.videos ? this.props.videos.map((video, idx) => (
      <Video video={video} key={idx}/>
    )) : null;
    
    return (
      <div className="video-list">
        { videos }
      </div>
    );
  }
}