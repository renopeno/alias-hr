import React, { Component } from 'react';

class TimeLeft extends Component {

  // secondsLeft = () => {
  //   let secondsState = {...this.props.counter};
  //   let secondsLeft = 10;
  //
  //   // Start timer
  //   this.timer = setInterval( () => {
  //
  //   secondsLeft --;
  //   // console.log(secondsLeft);
  //
  //   // Stop timer when it reaches 0
  //   if ( secondsLeft === 0 ) {
  //     clearInterval(this.timer);
  //   }
  //
  //   // Change state of seconds
  //   secondsState = secondsLeft;
  //   // console.log(secondsState);
  //
  //
  //   this.props.mergeCounterToState(secondsState);
  //
  //   }, 1000);
  // }

  componentDidMount = () => {
    
  }

  componentWillUnmount = () => {
    clearInterval(this.timer);
  }

  render () {
    return (
      <div className="timeLeft">{this.props.counter}</div>
    );
  }
}


export default TimeLeft;
