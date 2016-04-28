import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div className="views authorization login form">
        <input type="text" name="login" placeholder="Please, enter login" />
      </div>
    );
  }
}

Form.propTypes = {
};

Form.defaultProps = {
};

export default Form;
