import React, { Component } from "react";
import "./css/Input.css"
class Input extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="input__container">
        <label className="label__input" htmlFor={this.props.kind}>{this.props.kind}</label>
        <input name={this.props.kind} className="inputs" type={this.props.typeInput} placeholder={this.props.notice}/>
      </div>
    );
  }
}

export default Input;
