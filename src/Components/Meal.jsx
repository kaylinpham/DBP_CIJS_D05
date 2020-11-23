import React, { Component } from "react";
import Video from "./Video";
import "./css/Meal.css";
import Contents from "./Contents";
const remove = "watch?v=";
const add = "embed/";
const Meal = (props) => {
  let url = props.meal.meals[0].strYoutube;
  let index = url.indexOf(remove);
  url = url.slice(0, index) + add + url.slice(index + remove.length);
  return (
    <div className="meal__container">
      <Contents meal={props.meal.meals[0]} />
      <Video url={url}/>
    </div>
  );
};

export default Meal;
