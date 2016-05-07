import React from 'react';
import { connect } from 'react-redux';

import UsersAPI from '../utils/api/Users';

import HomeLayout from '../views/layouts/Home';

import InfinityRemarks from '../views/remarks/Infinity';
import NewRemark from '../views/remarks/New';

class MyPage extends React.Component {

  constructor(props) {
    super(props);
  }

  onLoadRemarks(params) {
    return UsersAPI.getRemarks(params);
  }

  render() {
    return (
      <HomeLayout {...this.props}>
        <div className="block block--land block--fit remark-new">
          <NewRemark remark={ {} } />
        </div>
        <InfinityRemarks
          remarks={ this.props.remarks }
          onLoad={ (params) => this.onLoadRemarks(params) }
        />
      </HomeLayout>
    );
  }
}


MyPage.propTypes = {
  remarks: React.PropTypes.array.isRequired
};

MyPage.defaultProps = {
  remarks: []
};

function mapStateToProps (state) {
  return {
    remarks: state.remarks
  };
}

export default connect(mapStateToProps)(MyPage);
