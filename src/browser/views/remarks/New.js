import React from 'react';
import Form from './Form';
import RemarksAPI from '../../utils/api/Remarks';

class New extends React.Component {

  serialize() {
    return {
      message: {
        body: this.refs.form.body
      }
    }
  }

  onSubmit(event) {
    event.preventDefault();
    return false;
  }

  render() {
    return (
      <div className="block block--land remark-new">
        <form onSubmit={ event => this.onSubmit(event) }>
          <Form remark={ this.props.remark } ref="form" />
        </form>
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
