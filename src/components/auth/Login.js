import React from "react";

const Login = ({ handleSubmit, error, handleChange }) => {
  let errorMesage = error ? (
    <p className="alert alert-danger error-container">Bad Credentials</p>
  ) : null;

  return (
    <div className="Login">
      <h1>Please login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            id="email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            id="password"
            onChange={handleChange}
            required
          />
        </div>
        {errorMesage}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
