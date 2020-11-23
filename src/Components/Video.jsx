import React, { Component } from "react";
const Video = (props) => {
  return (
    <div className="video__container">
      <h2>Video Recipe</h2>
      <iframe
        width="100%"
        height="561"
        src="https://www.youtube.com/embed/tOlOxCFYRFo"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;
