import React, { Component } from 'react';
import './css/Button.css'
const Button = (props) => {
    return ( 
    <button onClick={props.onEvent} className="btn" >{props.children}</button>
     );
}
 
export default Button;