import React, { Component } from "react";
import "./css/Search.css";
class Search extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="search">
        <h1>Charity Finder</h1>
        <input
          onChange={this.props.onInput}
          onKeyUp={this.props.onEnter}
          id="search__inp"
          type="text"
        />
      </div>
    );
  }
}

export default Search;
