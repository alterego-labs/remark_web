import React from 'react';

import NewRemark from '../New';

class New extends React.Component {
  render() {
    return (
      <NewRemark remark={ {} } />
    );
  }
}

New.propTypes = {
  remark: React.PropTypes.object
};

New.defaultProps = {
  remark: {}
};

export default New;
