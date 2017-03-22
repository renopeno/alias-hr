import React, { Component } from 'react';
import './Table.css';

class CorrectWord extends Component {
  render () {
    return (
      <div className="table table__row table__row--small">
          <span className="correct">
              {this.props.word}
          </span>
      </div>
    )
  }
}

class IncorrectWord extends Component {
  render () {
    return (
      <div className="table table__row table__row--small">
          <span className="incorrect">
              {this.props.word}
          </span>
      </div>
    )
  }
}


class Stats extends Component {

  sessionPointsToMatchPoints = () => {
    let currentId = this.props.state.id;
    let { currentSessionPoints } = this.props.state.teams[currentId];

    // reset list of guessed words for next round
    this.props.state.teams[currentId].correctWords = [];
    this.props.state.teams[currentId].incorrectWords = [];

    // transfer current session points to full match points
    this.props.state.teams[currentId].fullMatchPoints += currentSessionPoints;

    // reset current session points to be ready for next session
    this.props.state.teams[currentId].currentSessionPoints = 0;

    // change state id to fetch next team
    this.props.changeStateId();
  }

  goToTable = () => {
    this.sessionPointsToMatchPoints();
    this.props.goTo("Table");
  }

  goToWhoIsNext = () => {
    this.sessionPointsToMatchPoints();
    this.props.goTo("WhoIsNext");
  }

  render () {
    let sessionId = this.props.state.id;
    let  { correctWords, incorrectWords }  = this.props.state.teams[sessionId];

    let renderCorrectWords = correctWords.map((word, i) => {
      return <CorrectWord word={word} key={i} />
    })

    let renderIncorrectWords = incorrectWords.map((word, i) => {
      return <IncorrectWord word={word} key={i} />
    })

    return (
      <div>
        <h3>Riječi</h3>
        <div className="table">
          {renderCorrectWords}
          {renderIncorrectWords}
        </div>

        <div className="btn--fixed-bottom">
          <button
            type="button"
            onClick={this.goToTable}
            className="btn btn__white">
              Tablica
          </button>
          <button
            type="button"
            onClick={this.goToWhoIsNext}
            className="btn btn__white">
              Tko je sljedeći?
          </button>
        </div>

      </div>
    );
  }
}



export default Stats;
