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

    return (
      <div className="App">
        <div className="AppContainer">
          <Blinds {...breakProps} />
          <Blinds {...sessionProps} />
        </div>

        <div className='clock-container'>
          <h1>Session</h1>
          <span>25:00</span>
          <div className='flex'>
            <button onClick={this.handlePlayPause}>
              <i className='fas fa-play' />
            </button>
            <button onClick={this.handleReset}>
              <i className='fas fa-sync' />
            </button>
          </div>
        </div>

      </div>
    );
  }
}
export default App;
