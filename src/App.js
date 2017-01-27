import React, { Component } from 'react';
import logo from './img/logo.svg';
import Nav from './components/Nav';


// import components
import AddTeams from './components/AddTeams';
import Session from './components/Session';
import WhoIsNext from './components/WhoIsNext';

class App extends Component {
  constructor() {
    super();
    this.state = {
      component: "AddTeams",
      session: {},
      teams: []
    }
  }

  navigation = (goTo) => {
    this.setState({
      component: goTo
    });
  }

  startSession = (e) => {
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
          goTo={this.navigation}
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
              startSession={this.startSession}
              addNewTeam={this.addNewTeam}
              teams={this.state.teams}
              mergeTeamsToState={this.mergeTeamsToState}
            />
          }

          { this.state.component === "Session" &&
            <Session
              session={this.state.session}
              word={this.state.session.word}
              mergeCounterToState={this.mergeCounterToState}
              mergeSessionObject={this.mergeSessionObject}
              teams={this.state.teams}
              counter={this.state.seconds}
             />
          }

          { this.state.component === "WhoIsNext" &&
            <WhoIsNext
            state={this.state}
            loadGame={this.loadGame}
            />
          }

        </div>
      </div>
    );
  }
}

export default App;
