import React, { Component } from "react";
import "./css/Box.css";
const Box = (props) => {
  return (
    <div className="box__chat">
      <div className="message">
        <p className="left">
          Pham Ha Giang 
        </p>
      </div>
      <div className="message">
        <p className="right">
          Pham Ha Giang la mot hoc sinh cham ngoan hihihi
        </p>
      </div>
      <div className="message">
        <p className="left">
          Pham Ha Giang la mot hoc sinh cham ngoan hihihi
          hihihihihi
        </p>
      </div>
    </div>
  );
};

export default Box;
