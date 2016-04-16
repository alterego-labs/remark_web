import React from 'react';
import { Link, IndexLink } from 'react-router'

class Navbar extends React.Component {
  render() {
    return (
      <nav className="block block--land navbar">
        <ul className="navbar-links">
          <li>
            <IndexLink to="/" activeClassName="active">Home page</IndexLink>
          </li>
          <li>
            <Link to="/my" activeClassName="active">My remarks</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

Navbar.defaultProps = {
};

export default Navbar;
