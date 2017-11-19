import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from '../Home/Home.jsx';

import './app.css';

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/linked-page" component={Home}/>
            
          </Switch>
          {/* <Footer /> */}
        </div>
      </HashRouter>
    );
  }


}