import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Match } from 'react-router';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';

// Import main components
import Home from './Home';
import GameSession from './GameSession';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={Home} />
        <Match exactly pattern="/game/" component={GameSession} />
      </div>
    </BrowserRouter>
  )
}


ReactDOM.render (
  <Root />
  ,document.getElementById('root')
);
