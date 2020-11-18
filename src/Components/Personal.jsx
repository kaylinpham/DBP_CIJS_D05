import React, { Component } from 'react';
import "./css/Personal.css";
class Personal extends Component {
    constructor(props){
        super(props);
    }
    render() { 
        return ( 
            <div className="container__person">
                <p>{this.props.user}</p>
                <a href="#">Log out</a>
            </div>
         );
    }
}
 
export default Personal;