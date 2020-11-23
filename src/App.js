import "./App.css";
import Banner from "./Components/Banner";
import Meal from "./Components/Meal";
import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { meal: [], hasMeal: false };
    this.collectData = this.collectData.bind(this);
  }
  collectData(e) {
    e.preventDefault();
    let obj = this;
    let meal = [];
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.cod === 404 + "") {
          alert("Error Fetching 😩");
        } else {
          obj.setState({ data: data, hasMeal: true });
          setTimeout(() => {
            meal.push(<Meal meal={obj.state.data} />);
            obj.setState({ meal: meal });
          }, 0);
        }
      });
  }
  render() {
    return (
      <div className="container">
        <Banner
          onButton={this.collectData}
          size={
            this.state.hasMeal
              ? "banner__container h40"
              : "banner__container h80"
          }
        />
        {this.state.meal}
      </div>
    );
  }
}

export default App;
