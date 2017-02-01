import React, { Component } from 'react';
import logo from './img/logo.svg';
import Nav from './components/Nav';


// import components
import AddTeams from './components/AddTeams';
import Session from './components/Session';
import WhoIsNext from './components/WhoIsNext';
import Stats from './Stats';

class App extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      component: "AddTeams",
      session: {},
      teams: []
    }
  }

  // Method for switching between components that don't require .preventDefault()
  goTo = (goTo) => {
    this.setState({
      component: goTo
    });
  }

  whoIsNext = (e) => {
    e.preventDefault();
    this.setState({
      component: "WhoIsNext"
    });
  }

  loadGame = () => {
    this.setState({
      component: "Session"
    });
  }

  // After every session, change id for next one
  changeStateId = () => {
    let currentId = this.state.id;
    let teamsLength = this.state.teams.length - 2;

    // Make cycle
    if(currentId <= teamsLength){
      currentId ++;
    } else if (currentId > teamsLength) {
      currentId = 0;
    }

    this.setState({
      id: currentId
    })
  }


  mergeTeamsToState = (teams) => {
    this.setState({
       teams
    });
  }

  mergeSessionObject = (session) => {
    this.setState({
      session
    });
  }

  mergeCounterToState = (seconds) => {
    this.setState({
      seconds
    });
  }

  render () {
    return (
      <div>
        <Nav
          goTo={this.goTo}
        />
        <div className="home">
          { this.state.component !== "Session" &&
            <img src={logo} alt="alias-logo" className="logo" />
          }
          { this.state.component === "AddTeams" &&
            <h3>Welcome to <strong>Alias</strong></h3>
          }

          { this.state.component === "AddTeams" &&
            <AddTeams
              whoIsNext={this.whoIsNext}
              teams={this.state.teams}
              mergeTeamsToState={this.mergeTeamsToState}
            />
          }

          { this.state.component === "Session" &&
            <Session
              state={this.state}
              session={this.state.session}
              word={this.state.session.word}
              mergeCounterToState={this.mergeCounterToState}
              mergeSessionObject={this.mergeSessionObject}
              teams={this.state.teams}
              counter={this.state.seconds}
              goTo={this.goTo}
              changeStateId={this.changeStateId}
             />
          }

          { this.state.component === "WhoIsNext" &&
            <WhoIsNext
            state={this.state}
            loadGame={this.loadGame}
            />
          }

          { this.state.component === "Stats" &&
            <Stats
              state={this.state}
              goTo={this.goTo}
              whoIsNext={this.whoIsNext}
            />
          }

        </div>
      </div>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object
}

export default App;
