import React, { Component } from "react";
import { emojiList } from "./emojiList";
import Emoji from "./Emoji";
import "./Emojis.css";
const Emojis = (props) => {
  return <div id="matrix__emojis">{props.list}</div>;
};

export default Emojis;
