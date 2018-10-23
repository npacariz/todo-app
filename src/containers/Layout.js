import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { auth } from "./../services/AuthService.js";
import LoginLinks from "./../components/layout/LoginLinks";
import LogoutLinks from "./../components/layout/LogoutLinks";

class Layout extends Component {
  logoutUser = () => {
    auth.logout();
    this.props.history.push("/login");
  };
  render() {
    let navBarLinks = auth.isAuthenticated() ? (
      <li className="nav-item">
        <LoginLinks logoutUser={this.logoutUser} />
      </li>
    ) : (
      <LogoutLinks />
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

export default withRouter(Layout);
