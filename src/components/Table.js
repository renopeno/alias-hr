import React, { Component } from 'react';
import './Table.css';

class Points extends Component {
  render() {
    return (
      <div className="table table__row">
        <span className="table table__row--team">{this.props.team}</span>
        <span className="table table__row--points"> {" " + this.props.points}</span>
      </div>
    )
  }
}

class Table extends Component {

  goToWhoIsNext = () => {
    this.props.goTo("WhoIsNext");
  }

  render () {
    let teams = this.props.state.teams;
    let renderPoints = teams.map( (team, i) => {
      return <Points  team={team.teamName} points={team.fullMatchPoints} key={i} />
    })

    return (
      <div>
          <h3>Tablica</h3>
          <div className="table">
            {renderPoints}
          </div>

        <button
          type="button"
          className="btn btn__white btn--fixed-bottom"
          onClick={this.goToWhoIsNext}>
            Tko je sljedeći?
        </button>
      </div>
    );
  }
}

export default Table;
