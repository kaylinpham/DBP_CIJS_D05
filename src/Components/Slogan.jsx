import React, { Component } from "react";
import "./css/Slogan.css";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import { firebaseConfig } from "../config/firebase.config";
try {
  firebase.initializeApp(firebaseConfig);
} catch (e) {
  console.log(e.message);
}
const { default: Button } = require("./Button");
const Slogan = () => {
  const storage = firebase.storage();
  var url = "";
  storage.ref().child("dreaming____by_seerlight_dctbxag.jpg").getDownloadURL().then((downloadURL) =>{
    console.log(downloadURL);
  }).catch(err => console.log(err));
  return (
    <div className="slogan" style={{ backgroundImage: url }}>
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
  );
};

export default Slogan;
