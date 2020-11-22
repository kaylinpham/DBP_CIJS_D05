import "./App.css";
import Result from "./Components/Result";
import Search from "./Components/Search";
import React, { Component } from "react";
const apiKey = "4d8fb5b93d4af21d66a2948710284366";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: "", list: [] };
    this.getCity = this.getCity.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.enter=this.enter.bind(this);
  }
  getCity(value) {
    this.setState({ city: value.toLowerCase() });
  }
  handleCity() {
    var list = [];
    const obj = this;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${obj.state.city}&appid=${apiKey}&units=metric`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((info) => {
        if (info.cod === 404 + "") {
          alert("Please search for a valid city 😩");
        } else {
          obj.setState({ data: info });
          setTimeout(() => {
            list.push(<Result className="result" data={obj.state.data} />);
            obj.setState({ list: list });
          }, 0);
        }
      });
  }
  enter(e) {
    e.preventDefault();
    if (e.keyCode === 13) {
      this.handleCity();
    }
  }
  render() {
    return (
      <div className="container">
        <Search onEnter={this.enter} onCityChange={this.getCity} onButton={this.handleCity} />
        {this.state.list}
      </div>
    );
  }
}

export default App;
