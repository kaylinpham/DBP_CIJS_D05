import React, { Component } from "react";
import "./css/Description.css";
const Description = (props) => {
  return (
    <div className="description">
      <p className={props.meal.strCategory ? "" : "none"}>
        <b>Category:</b> {props.meal.strCategory}
      </p>
      <p className={props.meal.strArea ? "" : "none"}>
        <b>Area:</b> {props.meal.strArea}
      </p>
      <p className={props.meal.strTags ? "" : "none"}>
        <b>Tags:</b> {props.meal.strTags}
      </p>
    </div>
  );
};

export default Description;
