import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from '../images/logo.png';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={Logo} alt="Kiki Home" />
          </Link>
        </div>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
          <li>
            <Link to="/signin">Log in</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps)(Navbar);
