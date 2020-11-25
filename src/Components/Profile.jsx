import React, { Component } from 'react';
import Avatar from './Avatar';
import "./css/Profile.css";
const Profile = (props) => {
    return ( 
        <div className="profile">
            <img id="profile__img" src="./test.jpg"/>
            <span><h2>Chat</h2></span>
            <img id="logout_icon" src="./logout.png"/>
        </div>
     );
}
 
export default Profile;