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
                <ProfileBlock user={ {} } />
                <div className="block action">
                  <Link
                    className="btn btn--lg btn--primary"
                    to="/modal"
                    state={{ modal: true, returnTo: this.props.location.pathname }}
                  >
                    Write remark
                  </Link>
                </div>
                <NavbarBlock />
              </div>
            </div>
            <div className="page__body col-lg-9 col-md-9 col-sm-9 col-xs-12">
              <InfinityRemarks remarks={ this.props.remarks } />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


HomePage.propTypes = {
  remarks: React.PropTypes.array.isRequired
};

HomePage.defaultProps = {
  remarks: []
};

function mapStateToProps (state, ownProps) {
  return {
    remarks: state.reducers.remarks
  };
}

export default connect(mapStateToProps)(HomePage);
