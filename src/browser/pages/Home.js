import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'

import Topbar from '../blocks/Topbar';
import ProfileBlock from '../blocks/user/Profile';
import NavbarBlock from '../blocks/Navbar';
import InfinityRemarks from '../views/remarks/Infinity';
import NewRemark from '../views/remarks/New';

class HomePage extends React.Component {
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
              <div className="block block--land block--fit remark-new">
                <NewRemark remark={ {} } />
              </div>
              <InfinityRemarks remarks={ this.props.remarks } />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


HomePage.propTypes = {
  currentUser: React.PropTypes.object.isRequired,
  remarks: React.PropTypes.array.isRequired
};

HomePage.defaultProps = {
  currentUser: {}
};

function mapStateToProps (state) {
  return {
    currentUser: state.auth.user,
    remarks: state.remarks
  };
}

export default connect(mapStateToProps)(HomePage);
