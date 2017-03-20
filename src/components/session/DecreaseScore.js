import React, { Component } from 'react';

class DecreaseScore extends Component {

  render () {
    return (
      <button
        className="pointsButton decrease"
        onClick={this.props.decreaseScore}>
      </button>
    );
  }
}




export default DecreaseScore;
