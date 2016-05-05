import React from 'react';

import { browserHistory } from 'react-router';

import NewRemark from '../New';

class New extends React.Component {

  onCancel() {
    browserHistory.push(this.props.back);
    return false;
  }

  renderControls() {
    return (
      <button
        type="button"
        className="btn btn--default btn--md btn--right"
        onClick={ event => this.onCancel(event) }
      >
        Cancel
      </button>
    );
  }

  render() {
    return (
      <NewRemark
        remark={ {} }
        controls={ this.renderControls() }
      />
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
