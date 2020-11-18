import React, { Component } from "react";
import "./css/Slogan.css";
const { default: Button } = require("./Button");
class Slogan extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={this.props.className} style={{backgroundImage:`url(${this.props.url})`}}>
        <h1 className="title">Todo App</h1>
        <p className="quote">
          “Subtracting from your list of priorities is as important as adding to
          it”
        </p>
        <div className="btns__container">
          <Button onEvent={this.props.onLogin}>Login</Button>
          <Button onEvent={this.props.onSignUp}>Sign up</Button>
        </div>
      </div>
    )
  }
  
};

export default Slogan;
