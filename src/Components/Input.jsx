import React, { Component } from "react";
import "./css/Input.css";
import "./css/Form.css";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { url: "" };
  }
  componentDidUpdate() {
    if (String(this.props.clear).includes("none")) {
      this._input.value = "";
    }
  }
  render() {
    return (
      <div className="input__container">
        <label className="label__input" htmlFor={this.props.kind}>
          {this.props.kind}
        </label>
        <input
          ref={(el) => (this._input = el)}
          onChange={this.props.onInput}
          name={this.props.kind}
          className="inputs"
          type={this.props.typeInput}
          placeholder={this.props.notice}
        />
      </div>
    );
  }
}

export default Input;
