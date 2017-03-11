import React, { Component } from 'react';
import './WhoIsNext.css';
import Nav from './Nav';


class Words extends Component {

  render () {
    return (
      <div>
        <Nav />
        <h3>Enter new words</h3>

        <div className="white-wrapper who-is-next">



          <button
            type="button"
            className="button--start-game"
            onClick={this.props.loadGame}>
              ENTER
          </button>

        </div>

      </div>
    );
  }
}

export default Words;
