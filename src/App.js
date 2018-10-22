import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import ListOfTodos from './components/ListOfTodos'
import Login from './components/auth/Login'
import Register from './components/auth/Register';
import { BrowserRouter, Route} from "react-router-dom"
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <NavBar />
            <Route exact path="/" component={ListOfTodos} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
