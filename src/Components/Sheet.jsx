import React, { Component } from 'react';
import Personal from './Personal';
import Results from './Results';
import Search from './Search';
import "./css/Sheet.css"
class Sheet extends Component {
    constructor(props){
        super(props);
    }
    render() { 
        return ( 
            <div>
                <h3>Todo list</h3>
                <Personal/>
                <Search/>
                <Results/>
            </div>
         );
    }
}
 
export default Sheet;