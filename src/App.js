import React, { Component } from 'react';
import Router from './routes';
import Header from './components/header/header';
import Nav from './components/nav/nav';

import './reset.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router />
        <Header />
        <Nav />

      </div>
    );
  }
}

export default App;
