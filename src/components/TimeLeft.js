import React, { Component } from 'react';

class TimeLeft extends Component {

  constructor(props){
    super(props);
    this.timer = null;
    this.state = {
      counter: 60
    };
  }

  secondsLeft() {

      // Start timer
      this.timer = setInterval( () => {
        let count = this.state.counter;
        count --;

        // Stop timer when it reaches 0
        if ( count === 0 ) {
          clearInterval(this.timer);
        }

        // Change state of seconds
        this.setState({
          counter: count
        });

      },1000);

  }

  componentDidMount() {

    // Start my timer function when App is rendered
    this.secondsLeft();

  }




  render () {
    return (
      <div className="timeLeft">{this.state.counter}s left</div>
    );
  }
}




export default TimeLeft;
