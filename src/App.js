import "./App.css";
import Home from "./Components/Home";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import firebase from "./config/firebase.config";
import React, { Component } from "react";
import Login from "./Components/Login";
import Slogan from "./Components/Slogan";
import SignUp from "./Components/SignUp";
export const db = firebase.firestore();
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      loginState: false,
      signupState: false,
      home: [],
      sloganState: true,
    };
    this.toggleLoginForm = this.toggleLoginForm.bind(this);
    this.toggleSignUpForm = this.toggleSignUpForm.bind(this);
    this.login = this.login.bind(this);
    this.collectInfor = this.collectInfor.bind(this);
  }
  toggleLoginForm() {
    this.setState({ loginState: !this.state.loginState });
  }
  toggleSignUpForm() {
    this.setState({ signupState: !this.state.signupState });
  }
  collectInfor(e) {
    e.preventDefault();
    let value = e.target.value;
    this.setState({ [e.target.name]: value });
  }
  login(e) {
    let obj = this;
    let home = [];
    e.preventDefault();
    db.collection("users")
      .where("Username", "==", obj.state.username)
      .where("Password", "==", obj.state.password)
      .get()
      .then(function (querySnapshot) {
        if (!querySnapshot.empty) {
          let data = querySnapshot.docs[0].data();
          home.push(<Home data={data} />);
          obj.setState({
            home: home,
            loginState: false,
            sloganState: false,
            signupState: false,
          });
        } else {
          alert("Invalid username or password!");
        }
      });
  }
  render() {
    return (
      <div className="container">
        <Slogan
          className={this.state.sloganState ? "" : "none"}
          onLogin={this.toggleLoginForm}
          onSignup={this.toggleSignUpForm}
        />
        <Login
          onInput={this.collectInfor}
          onLogin={this.login}
          move={() => {
            this.toggleLoginForm();
            this.toggleSignUpForm();
          }}
          onExit={this.toggleLoginForm}
          status={
            this.state.loginState ? "form__container" : "form__container none"
          }
        />
        <SignUp
          move={() => {
            this.toggleLoginForm();
            this.toggleSignUpForm();
          }}
          onExit={this.toggleSignUpForm}
          status={
            this.state.signupState ? "form__container" : "form__container none"
          }
        />
        {this.state.home}
      </div>
    );
  }
}

export default App;
