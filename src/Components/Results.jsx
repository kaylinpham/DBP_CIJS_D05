import React, { Component } from 'react';
import Result from './Result';
import "./css/Results.css";
class Results extends Component {
    constructor(props){
        super(props);
    }
    render() { 
        return ( 
            <div className="list__results">
                <Result />
                <Result />
            </div>
         );
    }
}
 
export default Results;