import React from 'react';
import { Link } from 'react-router'

class Navbar extends React.Component {
  render() {
    return (
      <nav className="block block--land navbar">
        <ul className="navbar-links">
          <li className="active">
            <Link to={ '/' }>Home page</Link>
          </li>
          <li>
            <Link to={ '/' }>My remarks</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

Navbar.defaultProps = {
};

export default Navbar;
