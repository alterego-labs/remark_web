import React from 'react';
import { Link } from 'react-router';

// let yeomanImage = require('../images/yeoman.png');

class WelcomePage extends React.Component {
  render() {
    return (
      <div className="index">
        <div className="notice">
          Welcome page
          <Link to={ '/home' }>Go to Home</Link>
        </div>
        { this.props.children }
      </div>
    );
  }
}

WelcomePage.defaultProps = {
};

export default WelcomePage;
