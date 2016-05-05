import React from 'react';
import Form from './Form';
import RemarksAPI from '../../utils/api/Remarks';

import { addRemark } from '../../actions/Remarks';
import Store from '../../Store';

class New extends React.Component {

  serialize() {
    return {
      message: this.refs.form.serialize()
    }
  }

  onSubmit(event) {
    RemarksAPI.create(this.serialize()).then((response) => {
      Store.dispatch(addRemark(response.data.message));
      return response;
    }).then((response) => {
      this.setState({ errors: response.data.errors });
      return response;
    }).catch(function(ex) {
      return ex.response;
    });

    event.preventDefault();
    return false;
  }

  render() {
    return (
      <form onSubmit={ event => this.onSubmit(event) } className="form">
        <Form remark={ this.props.remark } ref="form" />
        <div className="form form__controls">
          <button type="submit" className="btn btn--primary btn--md btn--right">
            Post remark
          </button>
          { this.props.controls }
        </div>
      </form>
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
