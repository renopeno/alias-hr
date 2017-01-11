import React, { Component } from 'react';

class TimeLeft extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 60
    };
  }
  
  render () {
    return (
      <div className="timeLeft">{this.props.counter}s left</div>
    );
  }
}


export default TimeLeft;
