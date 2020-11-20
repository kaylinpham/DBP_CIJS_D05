import React, { Component } from "react";
import Personal from "./Personal";
import Results from "./Results";
import Search from "./Search";
import Result from "./Result";
import "./css/Sheet.css";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import firebase from "../config/firebase.config";
import { db } from "./SignUpForm";
class Sheet extends Component {
  constructor(props) {
    super(props);
    this.state = { list: this.props.list };
    this.getTask = this.getTask.bind(this);
    this.addTask = this.addTask.bind(this);
  }
  getTask(e) {
    this.setState({ temp: e.target.value });
  }
  addTask() {
    let obj = this;
    let tasks = this.props.task;
    let lists = this.props.list;
    if (this.state.temp !== "") {
      tasks.push(this.state.temp);
      lists.push(<Result task={obj.state.temp} />);
      this.setState({ task: tasks, list: lists });
      setTimeout(() => {
        var docRef = db.collection("accounts").doc(obj.props.id);
        this.setState({ temp: "" });
        return docRef
          .update({
            Tasks: obj.state.task,
          })
          .then(function () {
            console.log("Document successfully updated!");
          })
          .catch(function (error) {
            console.error("Error updating document: ", error);
          });
      }, 0);
    }
  }
  render() {
    return (
      <div
        style={{ backgroundImage: `url(${this.props.url})` }}
        className={this.props.className}
      >
        <h3>Todo list</h3>
        <Personal onLogOut={this.props.onLogOut} user={this.props.user} />
        <Search
          onInput={this.state.temp}
          onAdd={this.addTask}
          onGet={this.getTask}
        />
        <Results list={this.props.list} />
      </div>
    );
  }
}

export default Sheet;
