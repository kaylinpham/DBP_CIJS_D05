import React, { Component } from 'react';
import Avatar from './Avatar';
import "./css/Person.css";
import Quickview from './Quickview';
class Person extends Component {
    constructor(props){
        super(props);
    }
    render() { 
        return ( <div className='personal'>
        <Avatar/>
        <Quickview/>
        </div> );
    }
}
 
export default Person;