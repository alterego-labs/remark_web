import React from 'react';
import { connect } from 'react-redux';

import HomeLayout from '../views/layouts/Home';

import InfinityRemarks from '../views/remarks/Infinity';
import NewRemark from '../views/remarks/New';

class HomePage extends React.Component {
  render() {
    return (
      <HomeLayout {...this.props}>
        <div className="block block--land block--fit remark-new">
          <NewRemark remark={ {} } />
        </div>
        <InfinityRemarks remarks={ this.props.remarks } />
      </HomeLayout>
    );
  }
}


HomePage.propTypes = {
  remarks: React.PropTypes.array.isRequired
};

HomePage.defaultProps = {
  remarks: []
};

function mapStateToProps (state) {
  return {
    remarks: state.remarks
  };
}

export default connect(mapStateToProps)(HomePage);
