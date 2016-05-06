import React from 'react';
import Form from './Form';
import RemarksAPI from '../../utils/api/Remarks';

import { addRemark } from '../../actions/Remarks';
import Store from '../../Store';
import ErrorAlert from '../../components/alerts/Error';

class New extends React.Component {

  constructor(props) {
    super(props);
    this.state = { errors: [] };
  }

  serialize() {
    return {
      message: this.refs.form.serialize()
    }
  }

  onSubmit(event) {
    RemarksAPI.create(this.serialize()).then((response) => this.onSuccessfullyCreated(response)).catch(function(ex) {
      return ex.response.json();
    }).then((response) => {
      this.setState({ errors: response.data.errors });
      return response;
    });

    event.preventDefault();
    return false;
  }

  onSuccessfullyCreated(response) {
    Store.dispatch(addRemark(response.data.message));
    this.refs.form.clear();
    this.setState({ errors: [] });
    if (this.props.onSumbit) this.props.onSumbit();
    return response;
  }

  render() {
    return (
      <form onSubmit={ event => this.onSubmit(event) } className="form">
        <ErrorAlert errors={ this.state.errors } />
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
  remark: React.PropTypes.object,
  onSumbit: React.PropTypes.func
};

New.defaultProps = {
  remark: {}
};

export default New;
