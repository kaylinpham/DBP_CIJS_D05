import React, { Component } from "react";
import "./css/Input.css";

class Input extends Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate() {
    if (String(this.props.clear).includes("none")) {
      this._input.value = "";
    }
  }
  render() {
    return (
      <div className="input__container">
        <label
          className="label__input"
          htmlFor={this.props.label.toLowerCase().split(" ").join("")}
        >
          {this.props.label}
        </label>
        <input
          onChange={this.props.onInput}
          ref={(el) => (this._input = el)}
          className="inputs"
          type={this.props.type}
          name={this.props.label.toLowerCase().split(" ").join("")}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}

export default Input;
