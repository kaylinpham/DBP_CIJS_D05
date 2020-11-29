import React, { Component } from 'react';
import "./css/Text.css";
const Text = (props) => {
    return ( <div className="text">
        <textarea name="qrcode__inp" id="qrcode__inp" cols="30" rows="10"></textarea>
        <button>Update</button>
    </div> );
}
 
export default Text;