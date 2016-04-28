import React from 'react';
import { Link } from 'react-router';
import LoginForm from '../views/authorization/login/Form';

let Logo = require('../../images/Logo.png');

class WelcomePage extends React.Component {

  componentDidMount() {
    document.body.className = 'welcome';
  }

  render() {
    return (
      <div className="page page--welcome">
        <nav className="block topbar">
          <div className="topbar__logo">
            <Link to={ '/' }>
              <img src={ Logo } alt="Logo" title="Logo" />
            </Link>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h1>REMARK</h1>
              <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed ac justo leo. Phasellus sed fermentum elit.
                Quisque sodales lectus et diam feugiat ornare.
                Aliquam viverra urna accumsan scelerisque tincidunt.
                Curabitur facilisis feugiat tellus.
              </h2>
            </div>
            <div className="col-lg-4">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

WelcomePage.defaultProps = {
};

export default WelcomePage;
