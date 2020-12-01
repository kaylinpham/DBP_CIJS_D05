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
    this.state = { people: [], roomID: "", document: [] };
    this.onActive = this.onActive.bind(this);
  }
  componentDidMount() {
    const obj = this;
    let people = [];
    let partner = [];
    let document = [];
    let box = [];
    let mytyping = [];
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
        obj.setState({
          roomID: document[0].ID ? document[0].ID : "",
          document: document,
        });
      })
      .then(() => {
        people.push(
          <People
            roomID={obj.state.roomID}
            onActive={obj.onActive}
            owner={obj.props.data}
            data={document}
          />
        );
        partner.push(
          <Partner owner={obj.props.data} roomID={this.state.roomID} />
        );
        box.push(<Box owner={obj.props.data} roomID={this.state.roomID} />);
        mytyping.push(
          <MyTyping owner={obj.props.data} roomID={this.state.roomID} />
        );
        obj.setState({
          people: people,
          partner: partner,
          box: box,
          mytyping: mytyping,
        });
      });
  }
  onActive(value) {
    let partner = [];
    let people = [];
    let box = [];
    let mytyping = [];
    const obj = this;
    obj.setState({ roomID: value });
    setTimeout(() => {
      partner.push(
        <Partner owner={obj.props.data} roomID={obj.state.roomID} />
      );
      box.push(<Box owner={obj.props.data} roomID={this.state.roomID} />);
      mytyping.push(
        <MyTyping owner={obj.props.data} roomID={this.state.roomID} />
      );
      people.push(
        <People
          roomID={obj.state.roomID}
          onActive={obj.onActive}
          owner={obj.props.data}
          data={obj.state.document}
        />
      );
      obj.setState({ partner: [] });
      setTimeout(() => {
        obj.setState({
          partner: partner,
          people: people,
          box: box,
          mytyping: mytyping,
        });
      }, 0);
    });
  }
  render() {
    const data = this.props.data;
    return (
      <div className="home">
        <div className="contacts">
          <Profile data={data} />
          <Search />
          {this.state.people}
        </div>
        <div className="individual">
          {this.state.partner}
          {this.state.box}
          {this.state.mytyping}
        </div>
      </div>
    );
  }
}

export default Home;
