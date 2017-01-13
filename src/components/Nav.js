import React, { Component } from 'react';

class Nav extends Component {

  startSession = () => {
    this.context.router.transitionTo(`game`);

  }

  goToHome = () => {
    this.context.router.transitionTo(`/`);
  }


  render () {
    return (
      <nav>
        <ul id="navigation">
          <li className="navigation--item" onClick={this.startSession}>
              <div className="navigation--item-icon"><i className="fa fa-gamepad" aria-hidden="true"></i></div>
              <div className="navigation--item-text">New Game</div>
          </li>

          <li className="navigation--item" onClick={this.goToHome}>
              <div className="navigation--item-icon"><i className="fa fa-close" aria-hidden="true"></i></div>
              <div className="navigation--item-text">Exit Game</div>
          </li>

          <li className="navigation--item">
            <div className="navigation--item-icon"><i className="fa fa-cog" aria-hidden="true"></i></div>
            <div className="navigation--item-text">Settings</div>
          </li>

          <li className="navigation--item">
              <div className="navigation--item-icon"><i className="fa fa-lightbulb-o" aria-hidden="true"></i></div>
              <div className="navigation--item-text">Dark Mode</div>
          </li>
        </ul>
      </nav>
    );
  }
}


Nav.contextTypes = {
  router: React.PropTypes.object
}

export default Nav;
