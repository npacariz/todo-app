import React, { Component } from "react";
import {auth} from "./../../services/AuthService.js"

class Register extends Component {
  
  state = {
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      country: "",
      password: "",
      password_confirmation: "",
      listOfCountries: []
    };

    handleChange = event => {
        this.setState({
        [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        auth.register(this.state).then(
        () => {
            this.props.history.push('/')
        });
    }

    componentWillMount() {
        auth.create().then((response)=>{
            this.setState({
                listOfCountries: response.data
            })
        })
    }
    

    render() {
        let selectCountry = this.state.listOfCountries ? (
            this.state.listOfCountries.map((country) => {
                return (
                    <option key={country} value={country}>{country}</option>
                )
            })
        ): ("")
         
        return (
        <div className="Login">
            <h1>Please login</h1>
            <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <input type="text" 
                        placeholder="firstName"
                        id="firstName"
                        onChange={this.handleChange}
                />
            </div>
            <div className="form-group">
                <input type="type" 
                        placeholder="lastName"
                        id="lastName"
                        onChange={this.handleChange}
                />
            </div>
            <div className="form-group">
                <input type="type" 
                        placeholder="Company"
                        id="company"
                        onChange={this.handleChange}
                />
            </div>
            <div className="form-group">
                 <select
                    id="country"
                    onChange={this.handleChange}
                >
                        {selectCountry}
                </select>
            </div>
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
            <div className="form-group">
                <input type="password" 
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

export default Register