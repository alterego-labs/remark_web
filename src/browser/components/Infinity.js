import React from 'react';

class Infinity extends React.Component {

  constructor(props) {
    super(props);
    window.addEventListener('scroll', evt => this.scrollHandler(evt), false);
  }

  onBottom() {
    window.console.log('bottom');
  }

  scrollHandler() {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
      this.props.onBottom();
    }
  }

  render() {
    this.onBottom();
    return (
      <div className="infinity">
        <div className="infinity__body">
          { this.props.children }
        </div>
        <div>
          { this.props.spinner }
        </div>
      </div>
    );
  }
}


Infinity.propTypes = {
  children: React.PropTypes.object.isRequired,
  spinner: React.PropTypes.array,
  onBottom: React.PropTypes.func
};

Infinity.defaultProps = {
  children: []
};

export default Infinity;
