import React, { Component } from 'react';
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
      cycle: 0,
      component: "AddTeams",
      session: {},
      teams: []
    }
  }

  // Method for switching between components
  goTo = (goTo) => {
    this.setState({
      component: goTo
    });
  }

  whoIsNext = (e) => {
    e.preventDefault();
    if(this.state.teams.length > 0){
      this.setState({
        component: "WhoIsNext"
      });
    } else {
      alert("Nije dodana niti jedna ekipa!");
    }

  }

  loadGame = () => {
    this.setState({
      component: "Session"
    });
  }

  // After every session, change id for next one
  changeStateId = () => {
    let currentCycle = this.state.cycle;
    let currentId = this.state.id;
    let teamsLength = this.state.teams.length - 2;

    // Make cycle
    if(currentId <= teamsLength){
      currentId ++;
    } else if (currentId > teamsLength) {
      currentId = 0;
      currentCycle ++;
    }

    this.setState({
      id: currentId,
      cycle: currentCycle
    });
  }

  mergeSessionObject = (session) => {
    this.setState({
      session
    });
  }

  mergeTeamsToState = (teams) => {
    this.setState({
       teams
    });
  }

  mergePoints = (object) => {
    this.setState({
      object
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
        <div className="balloons">
          <div className="balloon1"></div>
          <div className="balloon2"></div>
        </div>
          { this.state.component === "AddTeams" &&
            <div className="logo"> </div>
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
              mergePoints={this.mergePoints}
              teams={this.state.teams}
              counter={this.state.seconds}
              goTo={this.goTo}
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
              changeStateId={this.changeStateId}
            />
          }
      </div>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object
}

export default App;
