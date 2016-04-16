import React from 'react';
import { Link } from 'react-router';
import Topbar from '../../blocks/Topbar';

class Application extends React.Component {
  render() {
    return (
      <div className="application">
        <Topbar />
        <div className="container">
          { this.props.children }
        </div>
      </div>
    );
  }
}

Application.defaultProps = {
};

export default Application;
