import React, { Component } from "react";
import Input from "./Input";
import Button from "./Button";
import "./css/Form.css";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/performance";
import firebase from "../config/firebase.config";
class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: null,
      pattern: [
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        /^\w{6,}$/,
      ],
    };
    this.collectInfor = this.collectInfor.bind(this);
    this.checkFormat = this.checkFormat.bind(this);
    this.collectInfor = this.collectInfor.bind(this);
    this.add = this.add.bind(this);
  }
  componentDidMount() {
    const storageRef = firebase.storage().ref();
    let spaceRef = "iconfinder_error_1646012.png";
    storageRef
      .child(spaceRef)
      .getDownloadURL()
      .then((url) => {
        this.setState({ url: url });
      })
      .catch((err) => console.log(err));
  }
  collectInfor(e) {
    e.preventDefault();
    let value = e.target.value;
    this.setState({ [e.target.name.split(" ").join("")]: value });
  }
  checkFormat() {
    if (
      !this.state.pattern[0].test(this.state.Email) ||
      !this.state.pattern[1].test(this.state.Username) ||
      !this.state.pattern[1].test(this.state.Password) ||
      this.state.Confirmpassword !== this.state.Password
    ) {
      return false;
    }
    return true;
  }
  add(e) {
    e.preventDefault();
    const transfer = this.props.onSignUp();
    if (this.checkFormat()) {
      firebase
        .firestore()
        .collection("accounts")
        .where("Username", "==", this.state.Username)
        .get()
        .then(function (querySnapshot) {
          return querySnapshot.empty;
        })
        .then((res) => {
          if (res) {
            firebase
              .firestore()
              .collection("accounts")
              .add({
                Email: this.state.Email,
                Username: this.state.Username,
                Password: this.state.Password,
              })
              .then(function () {
                console.log("Document successfully written!");
                alert("Sign up successfully!");
                transfer();
              })
              .catch(function (error) {
                console.error("Error writing document: ", error.message);
              });
          } else {
            alert("Your informations are invalid!");
          }
        });
    }
  }
  render() {
    return (
      <div className={this.props.className}>
        <img
          onClick={this.props.onSignUp}
          className="exit"
          src={this.state.url}
        />
        <form className="form__">
          <h2>Sign Up</h2>
          <Input
            clear={this.props.className}
            onInput={this.collectInfor}
            typeInput="text"
            notice="abc@domain.com"
            kind="Email"
          />
          <Input
            clear={this.props.className}
            onInput={this.collectInfor}
            typeInput="text"
            notice="Username (at least 6 characters)"
            kind="Username"
          />
          <Input
            clear={this.props.className}
            onInput={this.collectInfor}
            typeInput="password"
            notice="Password (at least 6 characters)"
            kind="Password"
          />
          <Input
            onInput={this.collectInfor}
            clear={this.props.className}
            typeInput="password"
            notice="Confirm your password"
            kind="Confirm password"
          />
          <div className="container__btn">
            <Button onEvent={this.add}>Sign Up</Button>
            <br />
            <p>
              You already have an account?
              <a onClick={this.props.transfer}> Login</a>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
