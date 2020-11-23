import React, { Component } from 'react';
import "./css/Banner.css";
const Banner = (props) => {
    return ( 
        <div className={props.size}>
            <h1>Feeling hungry ?</h1>
            <p>Get a random meal by clicking below</p>
            <button onClick={props.onButton}>GET MEAL 🍔</button>
        </div>
     );
}
 
export default Banner;