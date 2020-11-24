import React, { Component } from "react";
import "./css/Project.css";
const Project = (props) => {
  const data = props.data;
  const urlImg = data.imageLink;
  const urlPreview = data.projectLink;
  return (
    <div className="project__wrapper">
      <div className="project__cover">
        <img src={urlImg} style={{width:"100%",height:'100%'}} />
      </div>
      <div className="description">
        <h6>{data.title}</h6>
        <p>
          <b>Country: </b>
          {data.country}
        </p>
        <p>
          <b>Summary: </b>
          {data.summary}
        </p>
        <p>
          <b>Funding: </b>
          {data.funding}
        </p>
        <p>
          <b>Goal: </b>
          {data.goal}
        </p>
        <button className="infor__btn">
          <a href={urlPreview} target="_blank">More</a>
        </button>
      </div>
    </div>
  );
};

export default Project;
