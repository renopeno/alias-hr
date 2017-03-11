import React, { Component } from 'react';

class CorrectWord extends Component {
  render () {
    return (
      <div className="row">
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
      <div className="row">
          <span className="incorrect">
              {this.props.word}
          </span>
      </div>
    )
  }
}


class Stats extends Component {

  goToWhoIsNext = () => {
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
    this.props.goTo("WhoIsNext")
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
        <div className="white-wrapper who-is-next">
          {renderCorrectWords}
          {renderIncorrectWords}
        </div>
        <button
          type="button"
          onClick={this.goToWhoIsNext}
          className="button--start-game">
            NEXT TEAM
        </button>
      </div>
    );
  }
}



export default Stats;
