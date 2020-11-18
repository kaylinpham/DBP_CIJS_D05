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
            <div style={{backgroundImage:`url(${this.props.url})`}} className={this.props.className}>
                <h3>Todo list</h3>
                <Personal user={this.props.user}/>
                <Search/>
                <Results/>
            </div>
         );
    }
}
 
export default Sheet;