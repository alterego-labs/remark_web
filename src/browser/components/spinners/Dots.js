import React from 'react';

class Dots extends React.Component {
  render() {
    let className = 'spinner spinner--dots ' + this.props.className;
    if (!this.props.show) return false;
    return (
      <div className={ className }>
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    )
  }
}

Dots.propTypes = {
  show: React.PropTypes.array.isRequired,
  className: React.PropTypes.string.isRequired
};

Dots.defaultProps = {
  show: true,
  className: ''
};

export default Dots;
