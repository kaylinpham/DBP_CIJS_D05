import React, { Component } from "react";
import "./css/Select.css";
const Select = (props) => {
  let options = [];
  props.list.map((value) => {
    options.push(<option value={`${value}`}>{value}</option>);
  });
  return (
    <div className="selector">
      <label htmlFor="cars">{props.label} </label>
      <select name="typeNumber" id="typeNumber">
        {options}
      </select>
    </div>
  );
};

export default Select;
