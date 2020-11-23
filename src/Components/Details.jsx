import React, { Component } from "react";
import "./css/Details.css";
import Description from "./Description";
import Ingredients from "./Ingredients";
const Details = (props) => {
  let urlImg = props.meal.strMealThumb;
  return (
    <div className="details">
      <img className="meal__img" src={urlImg} />
      <Description meal={props.meal}/>
      <Ingredients meal={props.meal}/>
    </div>
  );
};

export default Details;
