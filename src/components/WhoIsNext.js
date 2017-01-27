import React, { Component } from 'react';
import './WhoIsNext.css';


class WhoIsNext extends Component {


  render () {
    return (
      <div>


        <h3>Who is next?</h3>

        <div className="white-wrapper who-is-next">

          <div className="row">
            <span>
              <i className="fa fa-users" aria-hidden="true"></i> Ekipa >
              <strong> {(this.props.state.teams[0].teamName).toUpperCase()}</strong>
            </span>
            <br/>
          </div>
          <div className="row">
            <span>
              <i className="fa fa-user" aria-hidden="true"></i> Objašnjava >
              <strong> {(this.props.state.teams[0].player1).toUpperCase()}</strong>
            </span>
            <br/>
          </div>
          <div className="row">
            <span>
              <i className="fa fa-user-o" aria-hidden="true"></i> Pogađa >
              <strong> {(this.props.state.teams[0].player2).toUpperCase()}</strong>
            </span>
          </div>

          <button
            type="button"
            className="button--start-game"
            onClick={this.props.loadGame}>
              START GAME
          </button>

        </div>


      </div>
    );
  }
}

export default WhoIsNext;
