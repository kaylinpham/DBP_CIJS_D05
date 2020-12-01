import React, { Component } from "react";
import "./css/Box.css";
import { db } from "../App";
class Box extends Component {
  constructor(props) {
    super(props);
    this.state = { conversation: [] };
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    const owner = this.props.owner;
    const roomID = this.props.roomID;
    const obj = this;
    let conversation = [];
    if (roomID !== "") {
      db.collection("messages")
        .where("roomID", "==", roomID)
        .orderBy("date", "asc")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            let message = doc.data();
            if (message.content !== "") {
              conversation.push(
                <div className="message">
                  <p className={message.sender === owner.ID ? "right" : "left"}>
                    {message.content}
                  </p>
                </div>
              );
            }
          });
        });
    }
    obj.setState({ conversation: conversation });
  }
  render() {
    return <div className="box__chat">{this.state.conversation}</div>;
  }
}

export default Box;
