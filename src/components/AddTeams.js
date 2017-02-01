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
      fullMatchPoints: 0
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
          <form className="white-wrapper" onSubmit={this.props.whoIsNext}>
            <input
              type="text"
              className="input--team-name"
              ref={ (input) => this.teamName = input }
              placeholder="Team name"
            />
            <input
              type="text"
              className="input--player-name"
              ref={ (input) => this.player1 = input }
              placeholder="Player 1 name"
            />
            <input
              type="text"
              className="input--player-name"
              ref={ (input) => this.player2 = input }
              placeholder="Player 2 name" />
            <button
              type="button"
              className="button--create-team"
              onClick={this.addNewTeam}>
                CREATE THIS TEAM
            </button>
            <button
              type="submit"
              className="button--start-game">
                NEXT
            </button>
          </form>
    );
  }
}


export default AddTeams;
