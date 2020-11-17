import React, { Component } from 'react';
import './css/Button.css'
const Button = (props) => {
    return ( 
    <button className="btn" >{props.children}</button>
     );
}
 
export default Button;