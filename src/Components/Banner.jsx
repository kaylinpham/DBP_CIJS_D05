import React, { Component } from 'react';
import "./css/Banner.css";
const Banner = (props) => {
    return ( 
        <div className="banner__container h80">
            <h1>Feeling hungry ?</h1>
            <p>Get a random meal by clicking below</p>
            <button>GET MEAL 🍔</button>
        </div>
     );
}
 
export default Banner;