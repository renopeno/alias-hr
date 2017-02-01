import React, { Component } from 'react';

class TimeLeft extends Component {

  render () {
    return (
      <div className="timeLeft">{this.props.counter}</div>
    );
  }
}


export default TimeLeft;
