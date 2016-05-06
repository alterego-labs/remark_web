import React from 'react';

class Error extends React.Component {

  constructor(props) {
    super(props);
  }

  renderErrors() {
    return this.props.errors.map((error) => {
      return (<div>{ error }</div>);
    });
  }

  render() {
    if (this.props.errors.length === 0) return false;
    return (
      <div className="alert alert--error">
        { this.renderErrors() }
      </div>
    )
  }
}

Error.propTypes = {
  errors: React.PropTypes.array.isRequired
};

Error.defaultProps = {
  errors: []
};

export default Error;
