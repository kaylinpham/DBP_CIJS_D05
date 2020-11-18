import React from "react";
import LoginForm from "./Components/LoginForm";
import SignUpForm from "./Components/SignUpForm";
import Sheet from "./Components/Sheet";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import firebase from "./config/firebase.config";

const { default: Slogan } = require("./Components/Slogan");
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpState: false,
      loginState: false,
      sheetState: false,
      sloganState: true,
    };
    this.toggleSignUpForm = this.toggleSignUpForm.bind(this);
    this.toggleLoginForm = this.toggleLoginForm.bind(this);
    this.collectInfor = this.collectInfor.bind(this);
    this.login = this.login.bind(this);
    this.toggleSheet = this.toggleSheet.bind(this);
  }
  componentDidMount() {
    const storageRef = firebase.storage().ref();
    let spaceRef = "image-from-rawpixel-id-2044837-jpeg.jpg";
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
    setTimeout(() => {
      console.log(this.state);
    }, 0);
  }
  login(e) {
    e.preventDefault();
    firebase
      .firestore()
      .collection("accounts")
      .where("Username", "==", this.state.Username)
      .where("Password", "==", this.state.Password)
      .get()
      .then(function (querySnapshot) {
        console.log(querySnapshot.empty);
        console.log(querySnapshot);
        return !querySnapshot.empty;
      })
      .then((res) => {
        if (res) {
          this.setState({
            sheetState: true,
            sloganState: false,
            loginState: false,
            signUpState: false,
          });
        } else {
          alert("Your informations are invalid!");
        }
      });
  }
  toggleSlogan() {
    this.setState({ sloganState: !this.state.sloganState });
  }
  toggleSignUpForm() {
    this.setState({ signUpState: !this.state.signUpState });
  }
  toggleLoginForm() {
    this.setState({ loginState: !this.state.loginState });
  }
  toggleSheet() {
    this.setState({ sheetState: !this.state.sheetState });
  }
  render() {
    return (
      <div className="container">
        <Slogan
          url={this.state.url}
          className={this.state.sloganState ? "slogan" : "slogan none"}
          onSignUp={this.toggleSignUpForm}
          onLogin={this.toggleLoginForm}
        />
        <LoginForm
          onButton={this.login}
          onInput={this.collectInfor}
          transfer={() => {
            this.toggleLoginForm();
            this.toggleSignUpForm();
          }}
          onLogin={this.toggleLoginForm}
          className={
            this.state.loginState ? "form__container" : "form__container none"
          }
        />
        <SignUpForm
          transfer={() => {
            this.toggleSignUpForm();
            this.toggleLoginForm();
          }}
          onSignUp={this.toggleSignUpForm}
          className={
            this.state.signUpState ? "form__container" : "form__container none"
          }
        />
        <Sheet user={this.state.Username} url={this.state.url} className={this.state.sheetState ? "sheet" : "sheet none"} />
      </div>
    );
  }
}

export default App;
