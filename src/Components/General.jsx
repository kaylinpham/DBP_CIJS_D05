import React, { Component } from "react";
import "./css/General.css";
const General = (props) => {
  return (
    <div className="general">
      <h2>{props.name}</h2>
      <p>{props.instruction}</p>
    </div>
  );
};

export default General;
