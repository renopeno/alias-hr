import React, { Component } from 'react';
import './WhoIsNext.css';

class Points extends Component {
  render() {
    return (
      <div className="row">
        <span className="pts">
          {this.props.team}: {" " + this.props.points}
        </span>
      </div>
    )
  }
}

class WhoIsNext extends Component {

  render () {
    let sessionId = this.props.state.id;
    let cycle = this.props.state.cycle;
    let teams = this.props.state.teams;

    let renderPoints = teams.map( (team, i) => {
      return <Points  team={team.teamName} points={team.fullMatchPoints} key={i} />
    })
    let objasnjava = () => {
      if( cycle % 2 === 0 || cycle === 0){
        return this.props.state.teams[sessionId].player1;
      } else {
        return this.props.state.teams[sessionId].player2;
      }
    }

    let pogada = () => {
      if( cycle % 2 !== 0 || cycle !== 0){
        return this.props.state.teams[sessionId].player1;
    } else {
        return this.props.state.teams[sessionId].player2;
    }
    }

    return (
      <div>

        <h3>Tablica</h3>

        <div className="white-wrapper who-is-next">
          {renderPoints}
        </div>

        <h3>Tko je sljedeći?</h3>

        <div className="who-is-next">
          <div className="row">
            <span className="row--title">
              {this.props.state.teams[sessionId].teamName}
            </span>
          </div>

          <div className="row">
            <span>
              Objašnjava: { objasnjava() }
            </span>
          </div>

          <div className="row">
              <span>
                  Pogađa: { pogada() }
              </span>
          </div>

          <button
            type="button"
            className="button--start-game"
            onClick={this.props.loadGame}>
              KRENI
          </button>

        </div>

      </div>
    );
  }
}

export default WhoIsNext;
