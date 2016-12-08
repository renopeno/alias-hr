import React, { Component } from 'react';

class IncreaseScore extends Component {

  render () {
    return (
      <button
        id="increase"
        className="counterButton increase"
        onClick={this.props.increaseScore}>
         +
      </button>
    );
  }
}




export default IncreaseScore;
