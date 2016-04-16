import React from 'react';

class NoMatch extends React.Component {
  render() {
    return (
      <div className="index">
        <div className="notice">404 Not found</div>
      </div>
    );
  }
}

NoMatch.defaultProps = {
};

export default NoMatch;
