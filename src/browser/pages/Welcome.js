import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import LoginForm from '../views/authorization/login/Form';

let Logo = require('../../images/Logo.png');

class WelcomePage extends React.Component {

  componentDidMount() {
    document.body.className = 'welcome';
  }

  renderForm() {
    return (
      <LoginForm />
    );
  }

  renderHi() {
    return (
      <div>Hello, { this.props.currentUser.login }</div>
    )
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
            <div className="col-lg-7 col-md-6 col-sm-6 col-xs-12">
              <div className="about">
                <h1>REMARK</h1>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sed ac justo leo. Phasellus sed fermentum elit.
                  Quisque sodales lectus et diam feugiat ornare.
                  Aliquam viverra urna accumsan scelerisque tincidunt.
                  Curabitur facilisis feugiat tellus.
                </h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-6 col-xs-12">
              <div className="auth">
                { this.props.loggedIn ? this.renderHi() : this.renderForm() }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

WelcomePage.defaultProps = {
};

function mapStateToProps (state, ownProps) {
  return {
    currentUser: state.auth.user,
    loggedIn: state.auth.user.loggedIn
  };
}

export default connect(mapStateToProps)(WelcomePage);
