import React, { Component } from "react";
import Result from "./Result";
import "./css/Results.css";

class Results extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.className}>
        {this.props.list}
      </div>
    );
  }
}

export default Results;
