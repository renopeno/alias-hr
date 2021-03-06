import React, { Component } from 'react';


class AddTeams extends Component {


  addNewTeam = () => {
    // Create new Team object that will be pushed to this.state.teams
    const newTeam = {
      id: this.props.teams.length,
      teamName: this.teamName.value,
      player1: this.player1.value,
      player2: this.player2.value,
      currentSessionPoints: 0,
      fullMatchPoints: 0,
      correctWords: [],
      incorrectWords: []
    };
    // Create copy of current teams array from state
    const teams = [...this.props.teams];
    // Push newly created team to copy of teams array
    teams.push(newTeam);

    this.props.mergeTeamsToState(teams);
    this.resetFormFields();
  }

  resetFormFields = () => {
    this.teamName.value = '';
    this.player1.value = '';
    this.player2.value = '';
  }


  render () {
    return (
      <div>
        <form className="addTeams">
          <input
            type="text"
            className="addTeams addTeams__input"
            ref={ (input) => this.teamName = input }
            placeholder="Ime ekipe"
          />
          <input
            type="text"
            className="addTeams addTeams__input"
            ref={ (input) => this.player1 = input }
            placeholder="Igrač 1"
          />
          <input
            type="text"
            className="addTeams addTeams__input"
            ref={ (input) => this.player2 = input }
            placeholder="Igrač 2" />
          <button
            type="button"
            className="btn btn__primary btn__add"
            onClick={this.addNewTeam}>
              + Dodaj ekipu
          </button>
        </form>
        <button
          type="submit"
          className="btn btn__white"
          onClick={this.props.whoIsNext}>
            Start
        </button>
      </div>

    );
  }
}


export default AddTeams;
