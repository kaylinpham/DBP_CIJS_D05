import React, { Component } from "react";
import "./css/Avatar.css";
const Avatar = (props) => {
  return (
    <div className="avt">
      <img src={props.url} />
    </div>
  );
};

export default Avatar;
