import React from "react";

const LoginLinks = ({ logoutUser }) => {
  return (
    <button className="nav-link" onClick={logoutUser}>
      Logout
    </button>
  );
};

export default LoginLinks;
