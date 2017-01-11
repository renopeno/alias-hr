import React, { Component } from 'react';
import word from './words';
import { getWord } from './helpers';
import './App.css';
import './components/buttons.css';
import Nav from './components/Nav';
import './components/nav.css';
import CurrentWord from './components/CurrentWord';
import TimeLeft from './components/TimeLeft';
import Points from './components/Points';
import DecreaseScore from './components/DecreaseScore';
import IncreaseScore from './components/IncreaseScore';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 60,
      points: 0,
      word: '',
      isFinished: false
    };
  }

  decreaseScore = (event) => {
    event.preventDefault()
    let points = this.state.points;
    points --;
    this.setState({
      points
    });
    this.getCurrentWord();
  }

  increaseScore = (event) => {
    event.preventDefault()
    let points = this.state.points;
    points ++;
    this.setState({
      points
    });
    this.getCurrentWord();
  }

  getCurrentWord = () => {
    const currentWord = getWord(word);
    this.setState({
      word: currentWord
    })
  }

  secondsLeft = () => {
    // Start timer
    this.timer = setInterval( () => {
      let seconds = this.state.counter;
      seconds --;

      // Stop timer when it reaches 0
      if ( seconds === 0 ) {
        clearInterval(this.timer);
      }

      // Change state of seconds
      this.setState({
        counter: seconds
      });

    }, 1000);
  }

  componentWillMount = () => {
    this.getCurrentWord();
  }

  componentDidMount = () => {
    // Start my timer function when App is rendered
    this.secondsLeft();
  }


  render() {
    return (
      <div className="App">
        <div className="header">
          <TimeLeft counter={this.state.counter}></TimeLeft>
          <Points points={this.state.points}></Points>
        </div>
        <CurrentWord word={this.state.word}></CurrentWord>
        <div className="buttons">
          <DecreaseScore decreaseScore={this.decreaseScore}></DecreaseScore>
          <IncreaseScore increaseScore={this.increaseScore}></IncreaseScore>
        </div>
        <Nav></Nav>
      </div>
    );
  }
}

export default App;
