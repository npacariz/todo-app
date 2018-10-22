import React, {Component} from 'react';
import {NavLink} from "react-router-dom"
import {auth} from "./../services/AuthService.js"




class Navbar extends Component  {
    logoutUser = () => {
        auth.logout()
        window.location.href='/login';
    
    }
    render() {
    return (
        <nav className="navbar navbar-light bg-light">
             <a className="navbar-brand" href="/">TodoApp</a>
             <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/login">Login</NavLink>
                </li>
                <li className="nav-item" >
                    <NavLink className="nav-link" to="/register">Register</NavLink>
                </li>
                <li className="nav-item">
                    <button className="nav-link" onClick={this.logoutUser} >Logout</button>
                </li>

            </ul>
        </nav>
    )
    }
}

export default Navbar;