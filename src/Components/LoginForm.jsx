import React, { Component } from "react";
import Input from "./Input";
import "./css/Form.css";
import Button from "./Button";
import "./css/Form.css";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import firebase from "../config/firebase.config";
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: null,
    };
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

  render() {
    return (
      <div className={this.props.className}>
        <img onClick={this.props.onLogin} className="exit" src={this.state.url} />
        <form className="form__">
          <h2>Login</h2>
          <Input onInput={this.props.onInput} clear={this.props.className} typeInput="text" notice="Username" kind="Username" />
          <Input onInput={this.props.onInput} clear={this.props.className} typeInput="password" notice="Password" kind="Password" />
          <div className="container__btn">
            <Button onEvent={this.props.onButton}>Login</Button>
            <br />
            <p>
              You don't have any account? <a onClick={this.props.transfer} > Sign up</a>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
