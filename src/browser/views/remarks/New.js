import React from 'react';
import Form from './Form';
import RemarksAPI from '../../../utils/api/Remarks';

class New extends React.Component {

  serialize() {
    return {
      message: {
        body: this.refs.form.body
      }
    }
  }

  onSubmit(event) {
    RemarksAPI.create(this.serialize()).then((response) => {
      Store.dispatch(receiveAccessToken(response.data.user));
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
