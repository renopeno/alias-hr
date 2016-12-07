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


  render() {
    return (
      <div className="App">
        <Nav></Nav>
        <TimeLeft></TimeLeft>
        <Points></Points>
        <CurrentWord></CurrentWord>
        <DecreaseScore></DecreaseScore>
        <IncreaseScore></IncreaseScore>
      </div>
    );
  }
}

export default App;
