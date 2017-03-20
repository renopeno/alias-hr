import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Match } from 'react-router';

import './index.css';
import './components/AddTeams.css';
import 'font-awesome/css/font-awesome.min.css';

// Import main components
import App from './App';

const Root = () => {
  return (
      <BrowserRouter>
        <div>
          <Match exactly pattern="" component={App} />
        </div>
      </BrowserRouter>
  )

}

ReactDOM.render (
  <Root />
  ,document.getElementById('root')
);
