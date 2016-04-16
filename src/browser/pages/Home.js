import React from 'react';
import { connect } from 'react-redux';
import { loadRemarks } from '../actions';
import 'whatwg-fetch';
import { Link } from 'react-router'


import Topbar from '../blocks/Topbar';
import ProfileBlock from '../blocks/user/Profile';
import NavbarBlock from '../blocks/Navbar';
import Remarks from '../views/remarks/Remarks';
import NewRemark from '../views/remarks/New';


class HomePage extends React.Component {

  constructor(props) {
    super(props);

    // let myHeaders = new Headers({
    //   'Content-Type': 'application/json',
    //   mode: 'no-cors'
    // });

    var headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': '*/*'
    });
    var request = new Request('http://remark-api.alterego-labs.com/api/v1/messages', {
      headers: headers,
      mode: 'no-cors',
      credentials: 'include'
    });

    fetch(request)
      .then(function(response) {
        return response.json()
      }).then(function(json) {
        console.log('parsed json', json)
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      });
  }

  componentDidMount() {
    this.props.dispatch(loadRemarks([{}, {}, {}, {}, {}, {}]));
  }

  render() {
    return (
      <div className="container">
        <Topbar />
        <div className="page">
          <div className="row">
            <div className="col-lg-3">
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
            <div className="page__body col-lg-9">
              <Remarks remarks={ this.props.remarks } />
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
