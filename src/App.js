import React, { Component } from "react";
import "./App.css";
import NavBar from "./containers/layout/NavBar";
import ListOfTodos from "./components/ListOfTodos";
import Auth from "./components/Auth";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { auth } from "./services/AuthService";

class App extends Component {
  render() {
    const ProtectedRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={props =>
          auth.isAuthenticated() === true ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          )
        }
      />
    );
    const GuestRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={props =>
          auth.isAuthenticated() !== true ? (
            <Component {...props} />
          ) : (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          )
        }
      />
    );

    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <ProtectedRoute exact path="/" component={ListOfTodos} />
          <GuestRoute exact path="/login" component={Auth} />
          <GuestRoute exact path="/register" component={Auth} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
