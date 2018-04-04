import React, { Component } from 'react';
import Router from './routes';
import Header from './components/header/header';
import Nav from './components/nav/nav';

import emeImg from './emeImg.png';
import mapImg from './mapImg.png';
import './reset.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />


        <Router />
        <div className="emeMapCont">
          <img src={emeImg} alt="for emergencies" />
          <img src={mapImg} alt="map of district" />
        </div>
      </div>
    );
  }
}

export default App;
