import React, { Component } from "react";
import "./css/Book.css";
const Book = (props) => {
  const data = props.data;
  console.log(data);
  const urlImg = data.volumeInfo.imageLinks
    ? data.volumeInfo.imageLinks.smallThumbnail
    : "";
  const urlPreview = data.volumeInfo.infoLink;
  return (
    <div className="book__wrapper">
      <div className="book__cover">
        <img src={urlImg} />
      </div>
      <div className="description">
        <h6>{data.volumeInfo.title}</h6>
        <p>
          <b>Authors: </b>
          {data.volumeInfo.authors}
        </p>
        <p>
          <b>Published Date: </b>
          {data.volumeInfo.publishedDate}
        </p>
        <p>
          <b>Publisher: </b>
          {data.volumeInfo.publisher}
        </p>
        <button className="inforbook__btn">
          <a href={urlPreview}>More</a>
        </button>
      </div>
    </div>
  );
};

export default Book;
