import React, { Component } from "react";
import { auth } from "./../../services/AuthService.js";

class Login extends Component {
  state = {
    credentals: {
      email: "",
      password: ""
    },
    error: null
  };
  handleChange = event => {
    this.setState({
      credentals: {
        ...this.state.credentals,
        [event.target.id]: event.target.value
      }
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    auth
      .login(this.state.credentals.email, this.state.credentals.password)
      .then(() => {
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({
          error: error.response.data
        });
      });
  };
  render() {
    let errorMesage = this.state.error ? (
      <p className="alert alert-danger error-container">Bad Credentials</p>
    ) : null;

    return (
      <div className="Login">
        <h1>Please login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              id="email"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              id="password"
              onChange={this.handleChange}
              required
            />
          </div>
          {errorMesage}
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
