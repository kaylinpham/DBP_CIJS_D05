import React, { Component } from 'react';
import './Emoji.css'
const Emoji = (props) => {
    return ( 
    <div className='emoji'><span>{props.sympol}</ span> {props.title}</div>
     );
}
 
export default Emoji;