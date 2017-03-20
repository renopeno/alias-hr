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
      if( cycle % 2 !== 0){
        return this.props.state.teams[sessionId].player1;
    } else {
        return this.props.state.teams[sessionId].player2;
    }
    }

    return (
      <div>
        <div className="tablica">

          <h3>Tablica</h3>
          <div className="table">
            {renderPoints}
          </div>

         </div>

        <h3>Tko je sljedeći <span className="questionMark">?</span></h3>

        <div className="table">
          <div className="row">
            <div className="row--title">
              {this.props.state.teams[sessionId].teamName}
            </div>
          </div>

          <div className="row">
            <div>
              Objašnjava: { objasnjava() }
            </div>
          </div>

          <div className="row">
              <div>
                  Pogađa: { pogada() }
              </div>
          </div>

          <button
            type="button"
            className="btn btn__white"
            onClick={this.props.loadGame}>
              Kreni
          </button>

        </div>

      </div>
    );
  }
}

export default WhoIsNext;
