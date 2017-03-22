import React, { Component } from 'react';
import './WhoIsNext.css';

class WhoIsNext extends Component {

  render () {
    let sessionId = this.props.state.id;
    let cycle = this.props.state.cycle;

    let objasnjava = () => {
      if( cycle % 2 === 0 || cycle === 0){
        return this.props.state.teams[sessionId].player1;
      } else {
        return this.props.state.teams[sessionId].player2;
      }
    }

    let pogada = () => {
      if( cycle % 2 !== 0){
        return this.props.state.teams[sessionId].player1;
    } else {
        return this.props.state.teams[sessionId].player2;
    }
    }

    return (
      <div>
        <h3>Tko je sljedeći <span className="questionMark">?</span></h3>
        <h3>{this.props.state.teams[sessionId].teamName}</h3>

        <div className="who-is-next who-is-next__wrapper">
          <div className="who-is-next who-is-next__balloon--1">
            <span className="who-is-next who-is-next__balloon--text">
              Objašnjava
              <br/>
              <strong>{ objasnjava() }</strong>
            </span>
          </div>

          <div className="who-is-next who-is-next__balloon--2">
            <span className="who-is-next who-is-next__balloon--text">
              Pogađa
              <br/>
              <strong>{ pogada() }</strong>
            </span>
          </div>

        </div>
        <button
          type="button"
          className="btn btn__white btn--fixed-bottom"
          onClick={this.props.loadGame}>
            Kreni
        </button>
      </div>
    );
  }
}

export default WhoIsNext;
