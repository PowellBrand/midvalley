import React, { Component } from 'react';
import Router from './routes';
import Header from './components/header/header';
import Nav from './components/nav/nav';

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
          <div className="emeMap-div">
            <div className="emergencies">
              <h1>EMERGENCY!</h1><br />
              <p>If you experience a sewer backup in your home, please call our District first at<br /> <a href="tel:(801) 255-7321">(801) 255-7321</a></p>
            </div>
            <img src={mapImg} alt="map of district" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
