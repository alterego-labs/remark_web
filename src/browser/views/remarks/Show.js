import React from 'react';

class Show extends React.Component {
  render() {
    return (
      <div className="view remark-show">
        Remark
      </div>
    );
  }
}

Show.propTypes = {
  remark: React.PropTypes.object
};

Show.defaultProps = {
  remark: {}
};

export default Show;
