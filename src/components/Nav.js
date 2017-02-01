import React, { Component } from 'react';

class Nav extends Component {

  startSession = () => {
    this.props.goTo("Session");
  }

  goToHome = () => {
    if(window.location.hash === "") {
      window.location.reload();
      // console.log(window.location);
    }

    this.context.router.transitionTo("");

  }

  goToWords = () => {
    this.context.router.transitionTo("words");
  }


  render () {
    return (
      <nav>
        <ul id="navigation">
          <li onClick={this.startSession}>
              <div className="navigation--item-icon">
                <i className="fa fa-gamepad" aria-hidden="true"></i>
              </div>
              <div className="navigation--item-text">New Game</div>
          </li>

          <li onClick={this.goToHome}>
              <div className="navigation--item-icon">
                <i className="fa fa-home" aria-hidden="true"></i>
              </div>
              <div className="navigation--item-text">Back to Home</div>
          </li>

          <li>
            <div className="navigation--item-icon">
              <i className="fa fa-cog" aria-hidden="true"></i>
            </div>
            <div className="navigation--item-text">Settings</div>
          </li>

          <li onClick={this.goToWords}>
              <div className="navigation--item-icon">
                <i className="fa fa-pencil" aria-hidden="true"></i>
              </div>
              <div className="navigation--item-text">Add Words</div>
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
