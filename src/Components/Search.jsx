import React, { Component } from "react";
import "./css/Search.css";
const apiKey = "4d8fb5b93d4af21d66a2948710284366";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getCity = this.getCity.bind(this);
    this.getInfor = this.getInfor.bind(this);
  }
  getCity(e) {
    e.preventDefault();
    // this.setState({ city: e.target.value });
    this.props.onDataChange(e.target.value);
  }
  getInfor() {
    const obj = this;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${obj.state.city}&appid=${apiKey}&units=metric`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((a) => {
        obj.setState({ data: a });
      });
  }
  render() {
    const data = this.props.data;
    return (
      <div className="search">
        <input onChange={this.getCity} type="text" className="inp__search" />
        <button onClick={this.getInfor}>SUBMIT</button>
      </div>
    );
  }
}

export default Search;
