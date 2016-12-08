import React, { Component } from 'react';
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
          points: 0
        };
      }

      decreaseScore = (event) => {
        event.preventDefault()
        let decreasePts = this.state.points;
        decreasePts --;
        this.setState({
          points: decreasePts
        })
      }

      increaseScore = (event) => {
        event.preventDefault()
        let increasePts = this.state.points;
        increasePts ++;
        this.setState({
          points: increasePts
        })
      }

      componentDidMount () {

      }


  render() {
    return (
      <div className="App">
        <Nav></Nav>
        <TimeLeft></TimeLeft>
        <Points points={this.state.points}></Points>
        <CurrentWord></CurrentWord>
        <DecreaseScore decreaseScore={this.decreaseScore}></DecreaseScore>
        <IncreaseScore increaseScore={this.increaseScore}></IncreaseScore>
      </div>
    );
  }
}

export default App;
