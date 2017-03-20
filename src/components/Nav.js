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
        <button className="button--menu"></button>
      </nav>
    );
  }
}


Nav.contextTypes = {
  router: React.PropTypes.object
}

export default Nav;
