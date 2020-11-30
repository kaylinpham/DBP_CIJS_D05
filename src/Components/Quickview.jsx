import React, { Component } from "react";
import "./css/Quickview.css";
class Quickview extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const message = this.props.room.message;
    return (
      <div className="quickview">
        <b>{this.props.data.Fullname}</b>
        <p>
          {message[message.length - 1]
            ? message[message.length - 1]
            : "Giờ đây các bạn có thể trò chuyện với nhau."}
        </p>
        <span>
          {new Date(this.props.room.modifiedDate.seconds*1000).toLocaleString()}
        </span>
      </div>
    );
  }
}

export default Quickview;
