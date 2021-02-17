import logo from './logo.svg';
import './App.css';
import Blinds from './components/Blinds';
import Timer from './components/Timer'
import React, { Component } from 'react';
import ClockContainer from './components/ClockContainer'

class App extends React.Component {
    //Initialising states
    state = {
      breakCount: 5,
      sessionCount: 25,
      clockCount: 25*60,
      currentTimer: 'Session',
      isPlaying: false
    }
  
  constructor(props) {
    super(props);
    this.loop = undefined;
  }

  componentWillUnmount() {
    clearInterval(this.loop);
  }



  //Function to start and pause timer
  handlePlayPause = () => {
    const { isPlaying } = this.state;

    //Loop will be cleared if playing
    if (isPlaying) {
      clearInterval(this.loop);

      // State setto false if playing
      this.setState({
        isPlaying: false
      });
    } else {

      // State set to true if playing
      this.setState({
        isPlaying: true
      })

      //Setting the interval loop for starting the countdown
      this.loop = setInterval(() => {
        const { clockCount, currentTimer, breakCount, sessionCount } = this.state;
        
        // Chance the Session display to Break display once clockCount hits 0
        if (clockCount === 0) {
          this.setState({
          currentTimer: currentTimer === 'Session' ? 'Break' : 'Session',
          clockCount: (currentTimer === 'Session') ? (breakCount * 60) : (sessionCount * 60)
          })
          //Countdown from clockCount minus 1second
        } else {
          this.setState({
            clockCount: clockCount - 1
          });
        }
      }, 1000);
    }
  }

  handleReset = () =>{
    this.setState({
      breakCount: 5,
      sessionCount: 25,
      clockCount: 25 * 60,
      currentTimer: 'Session',
      isPlaying: false,
    });

    clearInterval(this.loop);
  }

  //Converting count to seconds & minutes
  convertToTime = (count) => {
    const minutes = Math.floor(count / 60);
    let seconds = count % 60;

    seconds = seconds < 10 ? ('0' + seconds) : seconds;
    return `${minutes}: ${seconds}`;
  }

  handleBreakDecrease = () =>{
    const {breakCount} = this.state;

    this.setState({
      breakCount: breakCount - 1
    });
  }

  handleBreakIncrease = () =>{
    const {breakCount} = this.state;

    this.setState({
      breakCount: breakCount + 1
    });
  }

  handleSessionDecrease = () =>{
    const {sessionCount} = this.state;

    this.setState({
      sessionCount: sessionCount - 1
    });
  }

  handleSessionIncrease = () =>{
    const {sessionCount} = this.state;

    this.setState({
      sessionCount: sessionCount + 1
    });
  }

  render() {

    const { breakCount, sessionCount, clockCount, currentTimer, isPlaying } = this.state;

    const breakProps = {
      title: 'Break Length',
      count: breakCount,
      handleDecrease: this.handleBreakDecrease,
      handleIncrease: this.handleBreakIncrease
    }

    const sessionProps = {
      title: 'Session Length',
      count: sessionCount,
      handleDecrease: this.handleSessionDecrease,
      handleIncrease: this.handleSessionIncrease
    }

    const buttonStyle = {
      padding: '1rem',
      margin: '0 1rem',
      position: 'relative',
      bottom: '3.5rem',
      width: '6rem'

    }

    return (
      <div className="App">
        <div className="AppContainer">
          <Blinds {...breakProps} />
          <Blinds {...sessionProps} />
        </div>


        <div className='ClockContainer'>
          <h1 style={{ position: 'relative', bottom: '7rem' }}>{currentTimer}</h1>
          <span style={{ position: 'relative', bottom: '5rem', fontSize: '3rem' }}>{this.convertToTime(clockCount)}</span>
          <div className='flex'>
            <button onClick={this.handlePlayPause} style={buttonStyle}>
              <i className={`fas fa-${isPlaying ? 'pause' : 'play'}`} />
            </button>
            <button onClick={this.handleReset} style={buttonStyle} >
              <i className='fas fa-sync' />
            </button>
          </div>
        </div>

      </div>
    );
  }
}
export default App;
