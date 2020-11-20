import React, { Component } from "react";
import "./css/Result.css";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import firebase from "../config/firebase.config";

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const storageRef = firebase.storage().ref();
    let spaceRef = "garbage.png";
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
      <div className="wrapper__result">
        <input class="check" type="checkbox" />
        <input
          name={this.props.index}
          onChange={this.props.onChange}
          value={this.props.task}
          className="items__result"
        />
        <img
          onClick={this.props.onClear}
          tabIndex={this.props.index}
          class="garbage"
          src={this.state.url}
        />
      </div>
    );
  }
}

export default Result;
