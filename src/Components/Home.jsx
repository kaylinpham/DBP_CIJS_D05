import React, { Component } from 'react';
import "./css/Home.css";
import Person from './Person';
class Home extends Component {
    constructor(props){
        super(props);
    }
    render() { 
        return ( 
            <div className="container">
                <div className="contacts">
                    <Person/>
                    <Person/>
                </div>
                <div className="individual">b</div>
            </div>
         );
    }
}
 
export default Home;