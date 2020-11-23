import React, { Component } from "react";
import General from "./General";
import Details from "./Details";
import "./css/Contents.css";
const Contents = (props) => {
  return (
    <div className="contents__container">
      <Details meal={props.meal}/>
      <General name={props.meal.strMeal} instruction={props.meal.strInstructions}/>
    </div>
  );
};

export default Contents;