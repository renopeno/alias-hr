import React, { Component } from 'react';
import './index.css';

class Stats extends Component {

  goToWhoIsNext = () => {
    this.props.goTo("WhoIsNext")
  }

  render () {
    return (
      <div>

        <h3>Guessed Words are:</h3>

        <div className="white-wrapper who-is-next">


          <button
            type="button"
            onClick={this.goToWhoIsNext}
            className="button--start-game">
              NEXT
          </button>

        </div>

      </div>
    );
  }
}

Stats.contextTypes = {
  router: React.PropTypes.object
}

export default Stats;
