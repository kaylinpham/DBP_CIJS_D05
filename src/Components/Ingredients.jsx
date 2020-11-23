import React, { Component } from "react";
import "./css/Ingredients.css";
const Ingredients = (props) => {
  let meal = props.meal;
  let ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        <li>
          {meal[`strIngredient${i}`]} - {meal[`strMeasure${i}`]}
        </li>
      );
    }
  }
  return (
    <div className="ingredients">
      <h2>Ingredients:</h2>
      <ul>{ingredients}</ul>
    </div>
  );
};

export default Ingredients;
