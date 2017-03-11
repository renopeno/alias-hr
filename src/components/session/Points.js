import React, { Component } from 'react';

class Points extends Component {

  render () {
    let currentId = this.props.state.id;
    return (
      <div className="points">{this.props.state.teams[currentId].currentSessionPoints} pts</div>
    );
  }
}

export default Points;
