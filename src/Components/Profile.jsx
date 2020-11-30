import React, { Component } from "react";
import Avatar from "./Avatar";
import "./css/Profile.css";
const Profile = (props) => {
  return (
    <div className="profile">
      <img
        id="profile__img"
        src={
          props.url
            ? props.url
            : "https://www.pphfoundation.ca/wp-content/uploads/2018/05/default-avatar.png"
        }
      />
      <span>
        <h2>Chat</h2>
      </span>
      <img id="logout_icon" src="./logout.png" />
    </div>
  );
};

export default Profile;
