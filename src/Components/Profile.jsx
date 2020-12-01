import React, { Component } from "react";
import Avatar from "./Avatar";
import "./css/Profile.css";
const Profile = (props) => {
  return (
    <div className="profile">
      <div className="img__wrapper">
        <img
          id="profile__img"
          src={
            props.data.Avatar
              ? props.data.Avatar
              : "https://www.pphfoundation.ca/wp-content/uploads/2018/05/default-avatar.png"
          }
        />
        <p class="img__description">{props.data.Fullname}</p>
      </div>
      <span>
        <h2>Chat</h2>
      </span>
      <img id="logout_icon" src="./logout.png" />
    </div>
  );
};

export default Profile;
