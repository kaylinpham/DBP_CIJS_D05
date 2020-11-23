import React, { Component } from "react";
import General from "./General";
import Details from "./Details";
const Contents = (props) => {
  return (
    <div className="contents__container">
      <div className="details__container">
        <Details />
      </div>
      <div className="general__container">
        <General />
      </div>
    </div>
  );
};

export default Contents;
