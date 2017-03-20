import React, { Component } from 'react';

class IncreaseScore extends Component {

  render () {
    return (
      <button
        className="pointsButton increase"
        onClick={this.props.increaseScore}>
      </button>
    );
  }
}




export default IncreaseScore;
