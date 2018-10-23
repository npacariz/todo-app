import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { auth } from "./../../services/AuthService.js";

class Navbar extends Component {
  logoutUser = () => {
    auth.logout();
    this.props.history.push("/login");
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
        <NavLink className="navbar-brand" to="/">
          TodoApp
        </NavLink>
        <ul className="nav navbar-nav ml-auto">{navBarLinks}</ul>
      </nav>
    );
  }
}

export default withRouter(Navbar);
