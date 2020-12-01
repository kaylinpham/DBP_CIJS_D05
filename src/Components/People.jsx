import React, { Component } from "react";
import Person from "./Person";
import "./css/People.css";
const People = (props) => {
  const data = props.data;
  let person = [];
  data.map((value) => {
    person.push(
      <Person
        className={value.ID === props.roomID ? "personal active" : "personal"}
        onActive={props.onActive}
        owner={props.owner}
        private={value}
      />
    );
  });
  return <div className="people">{person}</div>;
};

export default People;
