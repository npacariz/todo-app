import React, { Component } from "react";
import "./App.css";
import Layout from "./containers/Layout";
import ListOfTodos from "./containers/ListOfTodos";
import Auth from "./containers/Auth";
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
          <Layout />
          <ProtectedRoute exact path="/" component={ListOfTodos} />
          <GuestRoute exact path="/login" component={Auth} />
          <GuestRoute exact path="/register" component={Auth} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
