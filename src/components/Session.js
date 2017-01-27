import React, { Component } from 'react';
import './Session.css';
import word from './../words';
import { getWord } from './../helpers';

import CurrentWord from './session/CurrentWord';
import TimeLeft from './session/TimeLeft';
import Points from './session/Points';
import DecreaseScore from './session/DecreaseScore';
import IncreaseScore from './session/IncreaseScore';

class Session extends Component {
  constructor() {
    super();
    this.sessionObject = {
      points: 0
    }
  }

  getCurrentWord = () => {
    const currentWord = getWord(word);
    // Update Session Object with new random word
    this.sessionObject.word = currentWord;
  }

  createSessionObject = (object) => {
    this.currentState = {...this.props.session};
    this.currentState = this.sessionObject;
    // console.log(this.currentState);
  }

  decreaseScore = () => {
    this.props.session.points --;
    this.getCurrentWord();
    this.props.mergeSessionObject(this.sessionObject);
    console.log(this.props.session);
  }

  increaseScore = () => {
    this.props.session.points ++;
    this.getCurrentWord();
    this.props.mergeSessionObject(this.sessionObject);
    console.log(this.props.session);
  }

  secondsLeft = () => {
    let secondsLeft = 11;

    // Start timer
    this.timer = setInterval( () => {
      secondsLeft --;

      // Stop timer when it reaches 0
      if ( secondsLeft === 0 ) {
        clearInterval(this.timer);
      }

      // Add seconds value to state
      this.props.mergeCounterToState(secondsLeft);

    }, 1000);
  }

  componentWillMount = () => {
    // Get first word for this session


    this.props.mergeSessionObject(this.sessionObject);

  }

  componentDidMount = () => {
        this.createSessionObject();
    this.getCurrentWord();
    this.props.mergeCounterToState();
    this.secondsLeft();
  }

  componentWillUnmount = () => {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <TimeLeft
            counter={this.props.counter} mergeCounterToState={this.props.mergeCounterToState}
          />
          <Points points={this.props.points} />
        </div>
        <CurrentWord word={this.props.word} />
        <div className="buttons">
          <DecreaseScore decreaseScore={this.decreaseScore} />
          <IncreaseScore increaseScore={this.increaseScore} />
        </div>
      </div>
    );
  }
}


export default Session;
