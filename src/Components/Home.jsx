import React, { Component } from "react";
import Box from "./Box";
import "./css/Home.css";
import MyTyping from "./MyTyping";
import Partner from "./Partner";
import People from "./People";
import Person from "./Person";
import Profile from "./Profile";
class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <div className="contacts">
          <Profile />
          <People />
        </div>
        <div className="individual">
          <Partner />
          <Box />
          <MyTyping />
        </div>
      </div>
    );
  }
}

export default Home;
