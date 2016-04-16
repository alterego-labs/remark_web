import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div className="views remark-form">
        <textarea placeholder="Write remark..." />
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
