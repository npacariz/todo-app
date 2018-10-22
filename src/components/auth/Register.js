import React, { Component } from "react";
import { auth } from "./../../services/AuthService.js";

class Register extends Component {
  state = {
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
    errors: []
  };

  handleChange = event => {
    this.setState({
      newUser: {
        ...this.state.newUser,
        [event.target.id]: event.target.value
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      errors: []
    });
    auth
      .register(this.state.newUser)
      .then(() => {
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({
          errors: error.response.data.errors
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
  shouldMarkError = field => {
    const hasError = this.state.errors[field];
    return hasError ? <p className="alert alert-danger">{hasError}</p> : false;
  };
  render() {
    let selectCountry = this.state.listOfCountries
      ? this.state.listOfCountries.map(country => {
          return (
            <option key={country} value={country}>
              {country}
            </option>
          );
        })
      : "";
    return (
      <div className="Login">
        <h1>Please singup</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="First Name"
              id="firstName"
              onChange={this.handleChange}
            />
            {this.shouldMarkError("firstName")}
          </div>
          <div className="form-group">
            <input
              type="type"
              placeholder="Last Name"
              id="lastName"
              onChange={this.handleChange}
            />
            {this.shouldMarkError("lastName")}
          </div>
          <div className="form-group">
            <input
              type="type"
              placeholder="Company"
              id="company"
              onChange={this.handleChange}
            />
            {this.shouldMarkError("company")}
          </div>
          <div className="form-group">
            <select id="country" onChange={this.handleChange}>
              <option>Select country</option>
              {selectCountry}
            </select>
            {this.shouldMarkError("country")}
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              id="email"
              onChange={this.handleChange}
            />
            {this.shouldMarkError("email")}
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              id="password"
              onChange={this.handleChange}
            />
            {this.shouldMarkError("password")}
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              id="password_confirmation"
              onChange={this.handleChange}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Register;
