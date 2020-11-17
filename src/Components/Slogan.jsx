import React, { Component } from "react";
import "./css/Slogan.css";
// import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import firebase from '../config/firebase.config'
const { default: Button } = require("./Button");
class Slogan extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      url: null
    }
  }

  componentDidMount() {
    const storageRef = firebase.storage().ref();
    let spaceRef = "dreaming____by_seerlight_dctbxag.jpg";
    storageRef.child(spaceRef).getDownloadURL().then((url) => {
      this.setState({url: url});
    }).catch(err => console.log(err))
    console.log(this.state.url)
  }

  render() {
    return (
      <div className="slogan" style={{backgroundImage: `url("${this.state.url}")`}}>
        <h1 className="title">Todo App</h1>
        <p className="quote">
          “Subtracting from your list of priorities is as important as adding to
          it”
        </p>
        <div className="btns__container">
          <Button>Login</Button>
          <Button>Sign up</Button>
        </div>
      </div>
    )
  }
  
};

export default Slogan;
