import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Match } from 'react-router';

import './index.css';
import './components/AddTeams.css';
import 'font-awesome/css/font-awesome.min.css';

// Import main components
import App from './App';
import Words from './components/Words';

const Root = () => {
  return (
      <BrowserRouter>
        <div>
          <Match exactly pattern="" component={App} />
          <Match exactly pattern="/words" component={Words} />
        </div>
      </BrowserRouter>
  )

}

ReactDOM.render (
  <Root />
  ,document.getElementById('root')
);
