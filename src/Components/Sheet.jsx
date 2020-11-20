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
    this.state = { list: this.props.list, results: null };
    this.getTask = this.getTask.bind(this);
    this.addTask = this.addTask.bind(this);
  }
  getTask(e) {
    this.setState({ temp: e.target.value });
  }
  addTask() {
    let obj = this;
    let tasks = obj.props.task;
    let lists = obj.props.list;
    if (this.state.temp !== "") {
      obj.setState({ results: "list__results" });
      setTimeout(() => {
        tasks.push(obj.state.temp);
        lists.push(
          <Result
            onChange={obj.props.onChange}
            index={lists.length}
            onClear={obj.props.onClear}
            key={lists.length + 1}
            task={obj.state.temp}
          />
        );
      }, 0);
      obj.setState({ task: tasks, list: lists });
      setTimeout(() => {
        var docRef = db.collection("accounts").doc(obj.props.id);
        this.setState({ temp: "" });
        return docRef
          .update({
            Tasks: obj.state.task,
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
        <Results
          className={
            this.state.results ? this.state.results : this.props.results
          }
          list={this.props.list}
        />
      </div>
    );
  }
}

export default Sheet;
