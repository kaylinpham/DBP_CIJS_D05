import React, { Component } from 'react';
import Video from './Video';
import "./css/Meal.css";
import Contents from './Contents';
const Meal = (props) => {
    return ( 
        <div className="meal__container">
            <Contents/>
            <Video/>
        </div>
     );
}
 
export default Meal;