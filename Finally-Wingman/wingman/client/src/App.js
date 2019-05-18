import React, { Component } from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import Main from "./components/main";
import List from "./components/list";
import API from "./utils/API";
//import Test from "./components/test";

class App extends Component {
  state = {
    search: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    userid: "",
    logged: false
  };

  componentDidMount() {
  }

  handleInputChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    })
  };

  logUser = () => {
    API.findUser({})
    .then(res => {
      let currentuser = res.data.filter(user => user.email === this.state.email);
      let currentpass = res.data.filter(user => user.password === this.state.password);
      if(currentuser.length > 0) {
        if(currentpass.length > 0) {
          this.setState({
            logged: true,
            userid: currentuser[0].id
          })
        } else {
          alert("Password is incorrect")
        }
      } else {
        alert("Email is incorrect")
      }
    })
    .catch(err => alert("Please Register"))
  }

  createUser = () => {
    API.createUser({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    })
    .then(res => {
      this.setState({
        userid: res.data.id,
        logged: true
      })
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" render={() => (
              <Login
              handleInputChange={this.handleInputChange}
              logUser={this.logUser}
              logged={this.state.logged}
              >
              </Login>
            )}/>
            <Route exact path="/register" render={() => (
              <Register
              handleInputChange={this.handleInputChange}
              createUser={this.createUser}
              logged={this.state.logged}
              >
              </Register>
            )}/>
            <Route exact path="/main" render={() => (
              <Main
              handleInputChange={this.handleInputChange}
              logged={this.state.logged}
              userid={this.state.userid}
              >
              </Main>
            )}/>
            <Route exact path="/list" render={() => (
              <List
              handleInputChange={this.handleInputChange}
              userid={this.state.userid}
              logged={this.state.logged}
              >
              </List>
            )}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;