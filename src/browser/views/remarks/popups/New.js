import React from 'react';

import { browserHistory } from 'react-router';

import NewRemark from '../New';

class New extends React.Component {

  closePopup() {
    browserHistory.push(this.props.back);
  }

  onCancel() {
    this.closePopup();
    return false;
  }

  onSubmit() {
    this.closePopup();
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
      <div className="remark-new">
        <NewRemark
          remark={ {} }
          controls={ this.renderControls() }
          onSumbit={ () => this.onSubmit() }
        />
      </div>
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
