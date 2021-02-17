import logo from './logo.svg';
import './App.css';
import Blinds from './components/Blinds';
import Timer from './components/Timer'
import React, { Component } from 'react';
import ClockContainer from './components/ClockContainer'

class App extends React.Component {
  state = {
    breakCount: 5,
    sessionCount: 25
  }

  render() {

    const { breakCount, sessionCount } = this.state;

    const breakProps = {
      title: 'Break Length',
      count: 5,
      handleDecrease: this.handleBreakDecrease,
      handleIncrease: this.handleBreakIncrease
    }

    const sessionProps = {
      title: 'Session Length',
      count: 25,
      handleDecrease: this.handleBreakDecrease,
      handleIncrease: this.handleBreakIncrease
    } 
    
    const buttonStyle ={
      padding: '1rem',
      margin: '0 1rem',
      
    }

    return (
      <div className="App">
        <div className="AppContainer">
          <Blinds {...breakProps} />
          <Blinds {...sessionProps} />
        </div>

        <h1>Session</h1>
        <div className='ClockContainer'>
          
          <span >25:00</span>
          <div className='flex'>
            <button onClick={this.handlePlayPause}>
              <i className='fas fa-play' style={buttonStyle}/>
            </button>
            <button onClick={this.handleReset}>
              <i className='fas fa-sync' style={buttonStyle} />
            </button>
          </div>
        </div>

      </div>
    );
  }
}
export default App;
