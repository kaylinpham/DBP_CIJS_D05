import React, { Component } from 'react';
import Input from "./Input";
import Button from "./Button";
import "./css/Search.css"
class Search extends Component {
    constructor(props){
        super(props);
        this.state={
            manipulation:"Add"
        }
    }
    render() { 
        return ( <div className="search__bar">
            <input type="text" id="inp__search" placeholder="Input your work"/>
            <Button>{this.state.manipulation}</Button>
        </div> );
    }
}
 
export default Search;