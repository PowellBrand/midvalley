import React, { Component } from 'react';
import Router from './routes';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Home from './components/home/home';

import './reset.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router />
        <div className="headerDiv">
          <Header />
        </div>
          <Nav />
        <div className="homeDiv">
          {Home}
        </div>
      </div>
    );
  }
}

export default App;
