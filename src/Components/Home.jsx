import React, { Component } from "react";
import Box from "./Box";
import "./css/Home.css";
import MyTyping from "./MyTyping";
import Partner from "./Partner";
import People from "./People";
import Search from "./Search";
import Profile from "./Profile";
import { db } from "../App";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { people: [], roomID: "" };
    this.onActive = this.onActive.bind(this);
  }
  componentDidMount() {
    const obj = this;
    let people = [];
    let partner = [];
    let document = [];
    db.collection("chatrooms")
      .orderBy("modifiedDate", "desc")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach((doc) => {
          let data = doc.data();
          if (
            data.user1 === obj.props.data.ID ||
            data.user2 === obj.props.data.ID
          ) {
            document.push(data);
          }
        });
        obj.setState({ roomID: document[0].ID ? document[0].ID : "" });
      })
      .then(() => {
        people.push(
          <People
            onActive={obj.onActive}
            owner={obj.props.data}
            data={document}
          />
        );
        partner.push(
          <Partner owner={obj.props.data} roomID={this.state.roomID} />
        );
        obj.setState({ people: people, partner: partner });
      });
  }
  onActive(value) {
    this.setState({ roomID: value });
    setTimeout(() => {
      console.log(this.state.roomID);
    });
  }
  render() {
    const data = this.props.data;
    return (
      <div className="home">
        <div className="contacts">
          <Profile url={data.Avatar} />
          <Search />
          {this.state.people}
        </div>
        <div className="individual">
          {this.state.partner}
          <Box owner={data} roomID={this.state.roomID} />
          <MyTyping owner={data} roomID={this.state.roomID} />
        </div>
      </div>
    );
  }
}

export default Home;
