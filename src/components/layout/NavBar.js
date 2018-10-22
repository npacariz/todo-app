import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "./../../services/AuthService.js";

class Navbar extends Component {
  logoutUser = () => {
    auth.logout();
    window.location.href = "/login";
  };
  render() {
    let navBarLinks = auth.isAuthenticated() ? (
      <li className="nav-item">
        <button className="nav-link" onClick={this.logoutUser}>
          Logout
        </button>
      </li>
    ) : (
      <div className="custom-style-navbar">
        <li className="nav-item">
          <NavLink className="nav-link navlink-style" to="/login">
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/register">
            Register
          </NavLink>
        </li>
      </div>
    );
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/">
          TodoApp
        </a>
        <ul className="nav navbar-nav ml-auto">{navBarLinks}</ul>
      </nav>
    );
  }
}

export default Navbar;
