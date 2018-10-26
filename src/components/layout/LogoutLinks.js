import React from "react";
import { NavLink } from "react-router-dom";

const LogoutLinks = () => {
  return (
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
};

export default LogoutLinks;
