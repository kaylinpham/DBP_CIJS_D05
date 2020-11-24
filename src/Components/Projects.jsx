import React, { Component } from "react";
import Project from "./Project";
import "./css/Projects.css";
const Projects = (props) => {
  const projects = props.projects;
  let lists=[];
  projects.map((value)=>{
      lists.push(<Project data={value}/>)
  })
  return (
    <div className="projects">
      {lists}
    </div>
  );
};

export default Projects;
