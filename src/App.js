import logo from './logo.svg';
import './App.css';
import Blinds from './components/Blinds';
import Timer from './components/Timer'
import React, { Component } from 'react';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="AppContainer">
          <Blinds />
          <Timer />
        </div>

      </div>
    );
  }
}
export default App;
