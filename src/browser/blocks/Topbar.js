import React from 'react';
import { Link } from 'react-router'

let Logo = require('../../images/Logo.png');

class Topbar extends React.Component {
  render() {
    return (
      <nav className="block topbar">
        <div className="topbar__logo">
          <Link to={ '/' }>
            <img src={ Logo } alt="Logo" title="Logo" />
          </Link>
        </div>
      </nav>
    );
  }
}

Topbar.defaultProps = {
};

export default Topbar;
