import React, { Component } from "react";
import "./css/Result.css";
const Result = (props) => {
  let details = props.data;
  let urlImg = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${details.weather[0].icon}.svg`;
  return (
    <div className="result">
      <h2 className="city__name">
        <span>{details.name}</span>
        <sup>{details.sys.country}</sup>
      </h2>
      <div className="city__temp">
        {details.main.temp} <sup>°C</sup>
      </div>
      <figure>
        <img className="city__icon" src={urlImg} />
        <p>{details.weather[0].description.toUpperCase()}</p>
      </figure>
    </div>
  );
};

export default Result;
