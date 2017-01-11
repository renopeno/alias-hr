import React, { Component } from 'react';

class CurrentWord extends Component {
  render () {
    return (
      <div className="word-wrapper">
        <h2 className="currentWord">{this.props.word}</h2>
      </div>
    );
  }
}




export default CurrentWord;
