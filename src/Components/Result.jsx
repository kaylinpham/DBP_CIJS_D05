import React, { Component } from 'react';
import "./css/Result.css";
const Result = (props) => {
    return ( 
        <div className="result">
            <h2 className="city__name">
                <span>Hanoi</span>
                <sup>VN</sup>
            </h2>
            <div className="city__temp">
            25 <sup>°C</sup>
            </div>
            <figure>
                <img className="city__icon" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/03n.svg" />
                <p>scattered clouds</p>
            </figure>
        </div>
     );
}
 
export default Result;