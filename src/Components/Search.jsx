import React, { Component } from "react";
import Input from "./Input";
import Button from "./Button";
import "./css/Search.css";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      manipulation: "Add",
    };
  }
  render() {
    return (
      <div className="search__bar">
        <input
          onChange={this.props.onGet}
          value={this.props.onInput}
          type="text"
          id="inp__search"
          placeholder="Input your work"
        />
        <Button onEvent={this.props.onAdd}>{this.state.manipulation}</Button>
      </div>
    );
  }
}

export default Search;
