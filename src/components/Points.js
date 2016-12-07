import React, { Component } from 'react';

class Points extends Component {

  constructor(props){
    super(props);
    this.state = {
      points: 0
    };
  }

  render () {


    return (
      <div className="points">{this.state.points} pts</div>
    );
  }
}




export default Points;
