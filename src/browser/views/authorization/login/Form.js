import React from 'react';
import AuthAPI from '../../../utils/api/Auth';

import { receiveAccessToken } from '../../../actions/Auth';
import Store from '../../../Store';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = { errors: [] };
  }

  serialize() {
    return {
      user: {
        login: this.refs.login.value
      }
    }
  }

  onSubmit(event) {
    AuthAPI.login(this.serialize()).then((response) => {
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

  renderErrors() {
    if (this.state.errors.length === 0) return false;
    return this.state.errors.map((error) => {
      return (<span>{ error }</span>)
    })
  }

  render() {
    return (
      <div className="views authorization login form">
        <form onSubmit={ event => this.onSubmit(event) } method="post">
          <input type="text" ref="login" name="login" placeholder="Please, enter login" />
          { this.renderErrors() }
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
};

Form.defaultProps = {
};

export default Form;
