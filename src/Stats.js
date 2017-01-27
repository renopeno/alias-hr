import React, { Component } from 'react';
import './index.css';
import Nav from './components/Nav';

class GuessedWords extends Component {

  startSession = (e) => {
    e.preventDefault();
    const sessionId = Date.now();
    this.context.router.transitionTo(`game-${sessionId}`);
  }

  componentWillMount() {
    console.log(this);
  }

  render () {
    return (
      <div>
        <Nav />
        <h3>Words:</h3>
        <p>dfdsfd </p>
      </div>
    );
  }
}

GuessedWords.contextTypes = {
  router: React.PropTypes.object
}

export default GuessedWords;
