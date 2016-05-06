import React from 'react';
import AuthAPI from '../../../utils/api/Auth';

import { receiveAccessToken } from '../../../actions/Auth';
import Store from '../../../Store';
import ErrorAlert from '../../../components/alerts/Error';

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
    }).catch(function(ex) {
      return ex.response.json();
    }).then((response) => {
      this.setState({ errors: response.data.errors });
      return response;
    });

    event.preventDefault();
    return false;
  }

  render() {
    return (
      <div className="views login-form">
        <form onSubmit={ event => this.onSubmit(event) } method="post">
          <ErrorAlert errors={ this.state.errors } />
          <input type="text" ref="login" name="login" placeholder="Please, enter login" className="input input-text" />
          <div>
            <button type="submit" className="btn btn--lg btn--full btn--primary-dark">Login</button>
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
