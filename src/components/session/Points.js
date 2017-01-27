import React, { Component } from 'react';

class Points extends Component {

  render () {
    return (
      <div className="points">{this.props.points} pts</div>
    );
  }
}

export default Points;
