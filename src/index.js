import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Match } from 'react-router';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';

// Import main components
// import Home from './Home';
import AddTeams from './AddTeams';
import Session from './Session';
import GuessedWords from './GuessedWords';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={AddTeams} />
        {/* <Match exactly pattern="/teams" component={AddTeams} /> */}
        <Match exactly pattern="/game" component={Session} />
        <Match exactly pattern="/stats" component={GuessedWords} />

      </div>
    </BrowserRouter>
  )
}


ReactDOM.render (
  <Root />
  ,document.getElementById('root')
);
