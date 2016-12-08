import React, { Component } from 'react';

class DecreaseScore extends Component {

  render () {
    return (
      <button
        id="decrease"
        className="counterButton decrease"
        onClick={this.props.decreaseScore}>
         -
      </button>
    );
  }
}




export default DecreaseScore;
