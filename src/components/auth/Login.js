import React, { Component } from "react";
import {auth} from "./../../services/AuthService.js"
class Login extends Component {
  state = {
      email: "",
      password: ""
    };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    auth.login(this.state.email, this.state.password).then(
      () => {
        this.props.history.push('/')
        
    });
  }

  render() {
    return (
      <div className="Login">
        <h1>Please login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="email" 
                    placeholder="Email"
                    id="email"
                    onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <input type="password" 
                    placeholder="Password"
                    id="password"
                    onChange={this.handleChange}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Login