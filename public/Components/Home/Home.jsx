import React, { Component } from 'react';
import Button from '../Button/Button.jsx';
import VideoList from '../VideoList/VideoList.jsx';
import axios from 'axios';
import './home.css';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: null
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/movies')
    .then((movies) => this.setState({ videos: movies.data }))
    .then(() => console.log(this.state.videos))
    .catch(error => console.log(`axios fetch movies error: ${error}`)); 
  }

  render() {
    return (
      <div className="red">
        <h1>
          Hello
        </h1>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
};