import React, { Component } from "react";
import "./css/Partner.css";
const Partner = (props) => {
  return (
    <div className="partner__profile">
      <div className="partner__img-container">
        <img className="partner__img" src="./test.jpg" />
      </div>
      <div className="partner__details">
        <p><b>Pham Ha Giang</b></p>
        <span>Hoạt động 1 giờ trước</span>
      </div>
    </div>
  );
};

export default Partner;
