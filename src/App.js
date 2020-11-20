import React from "react";
import LoginForm from "./Components/LoginForm";
import SignUpForm from "./Components/SignUpForm";
import Sheet from "./Components/Sheet";
import Result from "./Components/Result";
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
      Username: "",
      url: "",
      list: [],
      task: [],
      id: null,
    };
    this.toggleSignUpForm = this.toggleSignUpForm.bind(this);
    this.toggleLoginForm = this.toggleLoginForm.bind(this);
    this.collectInfor = this.collectInfor.bind(this);
    this.login = this.login.bind(this);
    this.logOut = this.logOut.bind(this);
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
  }
  login(e) {
    let obj = this;
    e.preventDefault();
    firebase
      .firestore()
      .collection("accounts")
      .where("Username", "==", this.state.Username)
      .where("Password", "==", this.state.Password)
      .get()
      .then(function (querySnapshot) {
        if (!querySnapshot.empty) {
          let data = querySnapshot.docs[0].data();
          let tasks = [];
          if (!data.Tasks || data.Tasks.length === 0) {
            tasks.push(
              <p style={{ textAlign: "center" }}>List your work here !</p>
            );
          } else {
            data.Tasks.map((value) => {
              tasks.push(<Result task={value} />);
            });
            obj.setState({ task: data.Tasks, id: querySnapshot.docs[0].id });
          }
          obj.setState({ list: tasks, id: querySnapshot.docs[0].id });
        }
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
          alert("Your informations are incorrect!");
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
  logOut() {
    let choose = window.confirm("Do you want to log out?");
    if (choose) {
      this.setState({ sheetState: !this.state.sheetState });
      this.toggleSlogan();
      window.location.reload();
    }
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
        <Sheet
          id={this.state.id}
          task={this.state.task}
          list={this.state.list}
          onLogOut={this.logOut}
          user={this.state.Username}
          url={this.state.url}
          className={this.state.sheetState ? "sheet" : "sheet none"}
        />
      </div>
    );
  }
}

export default App;
