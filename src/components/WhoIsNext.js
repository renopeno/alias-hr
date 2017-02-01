import React, { Component } from 'react';
import './WhoIsNext.css';


class WhoIsNext extends Component {

  render () {
    let sessionId = this.props.state.id;

    return (
      <div>

        <h3>Who is next?</h3>

        <div className="white-wrapper who-is-next">

          <div className="row">
            <span>
              <span>Team</span>
              <span>
                <strong>
                  {(this.props.state.teams[sessionId].teamName).toUpperCase()}
                </strong>
              </span>
              </span>
          </div>
          <div className="row">
            <span>
              <span>Explaining</span>
              <span>
                <strong>
                  {(this.props.state.teams[sessionId].player1).toUpperCase()}
                </strong>
              </span>
            </span>
          </div>
          <div className="row">
            <span>
              <span>Guessing</span>
              <span>
                <strong>
                  {(this.props.state.teams[sessionId].player2).toUpperCase()}
                </strong>
              </span>
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
