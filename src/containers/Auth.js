import React, { Component } from "react";
import Login from "./../components/auth/Login";
import Register from "./../components/auth/Register";
import { auth } from "./../services/AuthService.js";

class Auth extends Component {
  state = {
    credentals: {
      email: "",
      password: ""
    },
    loginErrors: null,
    newUser: {
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      country: "",
      password: "",
      password_confirmation: ""
    },
    listOfCountries: [],
    registerErrors: []
  };

  handleLoginChange = event => {
    this.setState({
      credentals: {
        ...this.state.credentals,
        [event.target.id]: event.target.value
      }
    });
  };
  handleLoginSubmit = event => {
    event.preventDefault();
    auth
      .login(this.state.credentals.email, this.state.credentals.password)
      .then(() => {
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({
          loginErrors: error.response.data
        });
      });
  };

  handleRegisterChange = event => {
    this.setState({
      newUser: {
        ...this.state.newUser,
        [event.target.id]: event.target.value
      }
    });
  };

  handleRegisterSubmit = event => {
    event.preventDefault();
    this.setState({
      registerErrors: []
    });
    auth
      .register(this.state.newUser)
      .then(() => {
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({
          registerErrors: error.response.data.errors
        });
      });
  };
  componentWillMount() {
    auth.create().then(response => {
      this.setState({
        listOfCountries: response.data
      });
    });
  }
  render() {
    const showComponent =
      this.props.location.pathname === "/register" ? (
        <Register
          newUser={this.state.newUser}
          listOfCountries={this.state.listOfCountries}
          errors={this.state.registerErrors}
          handleSubmit={this.handleRegisterSubmit}
          handleChange={this.handleRegisterChange}
        />
      ) : (
        <Login
          credentals={this.state.credentals}
          error={this.state.loginErrors}
          handleSubmit={this.handleLoginSubmit}
          handleChange={this.handleLoginChange}
        />
      );
    return <div>{showComponent}</div>;
  }
}

export default Auth;
