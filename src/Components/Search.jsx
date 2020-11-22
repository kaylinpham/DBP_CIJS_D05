import React, { Component } from "react";
import "./css/Search.css";
class Search extends Component {
  constructor(props) {
    super(props);
    this.getCity = this.getCity.bind(this);
  }
  getCity(e) {
    e.preventDefault();
    this.props.onCityChange(e.target.value);
  }

  render() {
    return (
      <div className="search">
        <h1>Simple Weather App</h1>
        <input
          onKeyUp={this.props.onEnter}
          onChange={this.getCity}
          type="text"
          className="inp__search"
        />
        <button onClick={this.props.onButton}>SUBMIT</button>
      </div>
    );
  }
}

export default Search;
