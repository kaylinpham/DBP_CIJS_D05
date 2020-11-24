import React, { Component } from "react";
import Book from "./Book";
import "./css/Books.css";
const Books = (props) => {
  const books = props.books.items;
  let lists=[];
  books.map((value)=>{
      lists.push(<Book data={value}/>)
  })
  return (
    <div className="books">
      {lists}
    </div>
  );
};

export default Books;
