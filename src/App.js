import React from "react";
import LoginForm from "./Components/LoginForm";
import SignUpForm from "./Components/SignUpForm";
import Sheet from "./Components/Sheet";
import Result from "./Components/Result";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import { db } from "./Components/SignUpForm";
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
      edit: "",
      index: null,
      resultState: false,
    };
    this.toggleSignUpForm = this.toggleSignUpForm.bind(this);
    this.toggleLoginForm = this.toggleLoginForm.bind(this);
    this.collectInfor = this.collectInfor.bind(this);
    this.login = this.login.bind(this);
    this.logOut = this.logOut.bind(this);
    this.clearTask = this.clearTask.bind(this);
    this.edit = this.edit.bind(this);
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
  clearTask(e) {
    let obj = this;
    e.preventDefault();
    let i = e.target.tabIndex;
    let arr = obj.state.task;
    let choose = window.confirm("Do you want to delete this item?");
    if (choose) {
      arr = arr.filter((v, k) => k !== i);
      this.setState({ task: arr });
      setTimeout(() => {
        var docRef = db.collection("accounts").doc(obj.state.id);
        return docRef
          .update({
            Tasks: obj.state.task,
          })
          .then(function () {
            let list = [];
            obj.state.task.map((value, key) => {
              list.push(
                <Result
                  onChange={obj.edit}
                  index={key}
                  onClear={obj.clearTask}
                  key={key + 1}
                  task={value}
                />
              );
            });
            obj.setState({ list: list });
            console.log("Document successfully updated!");
          })
          .catch(function (error) {
            console.error("Error updating document: ", error);
          });
      }, 0);
    }
  }
  login(e) {
    let obj = this;
    e.preventDefault();
    db.collection("accounts")
      .where("Username", "==", this.state.Username)
      .where("Password", "==", this.state.Password)
      .get()
      .then(function (querySnapshot) {
        if (!querySnapshot.empty) {
          let data = querySnapshot.docs[0].data();
          let tasks = [];
          if (!data.Tasks || data.Tasks.length === 0) {
            obj.setState({ resultState: false });
          } else {
            obj.setState({ resultState: true });
            setTimeout(() => {
              data.Tasks.map((value, key) => {
                tasks.push(
                  <Result
                    onChange={obj.edit}
                    index={key}
                    onClear={obj.clearTask}
                    key={key + 1}
                    task={value}
                  />
                );
              });
              obj.setState({ task: data.Tasks, id: querySnapshot.docs[0].id });
            }, 0);
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
  edit(e) {
    e.preventDefault();
    let obj = this;
    let i = e.target.name;
    let arr = obj.state.task;
    arr[i] = e.target.value;
    obj.setState({ task: arr });
    let list = [];
    arr.map((value, key) => {
      list.push(
        <Result
          onChange={obj.edit}
          index={key}
          onClear={obj.clearTask}
          key={key + 1}
          task={value}
        />
      );
    });
    obj.setState({ list: list });
    setTimeout(() => {
      var docRef = db.collection("accounts").doc(obj.state.id);
      return docRef
        .update({
          Tasks: obj.state.task,
        })
        .catch(function (error) {
          console.error("Error updating document: ", error);
        });
    }, 0);
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
          results={
            this.state.resultState ? "list__results" : "list__results none"
          }
          onChange={this.edit}
          onClear={this.clearTask}
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
