import React from 'react';

class Form extends React.Component {

  serialize() {
    return {
      body: this.refs.body.value
    }
  }

  render() {
    return (
      <div className="views remark-form">
        <textarea placeholder="Write remark..." ref="body" rows={ 1 } />
      </div>
    );
  }
}

Form.propTypes = {
  remark: React.PropTypes.object.isRequired
};

Form.defaultProps = {
  remark: {}
};

export default Form;
