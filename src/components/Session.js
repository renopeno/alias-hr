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
    this.sessionObject = {};
    this.teamsObject = {};
  }

  getCurrentWord = () => {
    const currentWord = getWord(word);
    // Update Session Object with new random word
    this.sessionObject.word = currentWord;
  }

  createSessionObject = () => {
    this.currentState = {...this.props.session};
    this.currentState = this.sessionObject;
  }

  decreaseScore = () => {
    let sessionId = this.props.state.id;
    let team = this.props.state.teams[sessionId];

    team.incorrectWords.push(this.props.session.word);
    team.currentSessionPoints --;
    this.getCurrentWord();
    this.props.mergeSessionObject(this.sessionObject);

  }

  increaseScore = () => {
    let sessionId = this.props.state.id;
    let team = this.props.state.teams[sessionId];


    team.correctWords.push(this.props.session.word);
    team.currentSessionPoints ++;
    this.getCurrentWord();
    this.props.mergeSessionObject(this.sessionObject);

  }

  secondsLeft = () => {
    let secondsLeft = this.props.state.seconds;

    // Start timer
    this.timer = setInterval( () => {
      secondsLeft --;
      if ( secondsLeft === 0 ) {
        clearInterval(this.timer);
        this.props.goTo("Stats");
      }
      // merge seconds to state
      this.props.mergeCounterToState(secondsLeft);
    }, 1000);
  }

  componentDidMount = () => {
    this.props.mergeSessionObject(this.sessionObject);
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
            counter={this.props.counter}
            mergeCounterToState={this.props.mergeCounterToState}
          />
          <Points state={this.props.state} />
        </div>

        <CurrentWord word={this.props.word} />

        <div className="pointsButtonContainer">
          <DecreaseScore decreaseScore={this.decreaseScore} />
          <IncreaseScore increaseScore={this.increaseScore} />
        </div>
      </div>
    );
  }
}


export default Session;
