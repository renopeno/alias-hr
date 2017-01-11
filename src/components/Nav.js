import React, { Component } from 'react';

class Nav extends Component {

  restartSession = () => {
    window.location.reload();
  }

  render () {
    return (
      <nav>
        <ul id="navigation">
          <li className="navigation--item">
              <div className="navigation--item-icon"><i className="fa fa-gamepad" aria-hidden="true"></i></div>
              <div className="navigation--item-text">New Game</div>
          </li>

          <li className="navigation--item">
              <div className="navigation--item-icon"><i className="fa fa-book" aria-hidden="true"></i></div>
              <div className="navigation--item-text">Rules</div>
          </li>

          <li className="navigation--item">
            <div className="navigation--item-icon"><i className="fa fa-cog" aria-hidden="true"></i></div>
            <div className="navigation--item-text">Settings</div>
          </li>

          <li className="navigation--item" onClick={this.restartSession}>
              <div className="navigation--item-icon"><i className="fa fa-lightbulb-o" aria-hidden="true"></i></div>
              <div className="navigation--item-text">Dark Mode</div>
          </li>
        </ul>
      </nav>
    );
  }
}




export default Nav;
