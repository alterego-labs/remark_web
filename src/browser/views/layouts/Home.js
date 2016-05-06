import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'

import Topbar from '../../blocks/Topbar';
import ProfileBlock from '../../blocks/user/Profile';
import NavbarBlock from '../../blocks/Navbar';

class Home extends React.Component {

  render() {
    return (
      <div className="container">
        <Topbar />
        <div className="page">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div className="page__sidebar">
                <ProfileBlock user={ this.props.currentUser } />
                <div className="block action">
                  <Link
                    className="btn btn--lg btn--primary"
                    to="/new-remark"
                    state={{ modal: true, returnTo: this.props.location.pathname }}
                  >
                    Write remark
                  </Link>
                </div>
                <NavbarBlock />
              </div>
            </div>
            <div className="page__body col-lg-9 col-md-9 col-sm-9 col-xs-12">
              { this.props.children }
            </div>
          </div>
        </div>
      </div>
    );
  }
}


Home.propTypes = {
  currentUser: React.PropTypes.object.isRequired
};

Home.defaultProps = {
  currentUser: {}
};

function mapStateToProps (state) {
  return {
    currentUser: state.auth.user
  };
}

export default connect(mapStateToProps)(Home);
