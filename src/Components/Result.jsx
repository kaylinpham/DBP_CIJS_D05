import React, { Component } from "react";
import "./css/Result.css";

class Result extends Component {
    constructor(props){
        super(props);
    }
    render() { 
        return ( <div className="wrapper__result">
        <input class="check" type="checkbox" />
        <div className="items__result" data-value="vfsb">
        </div>
        <img class="garbage" src="garbage.png" />
      </div> );
    }
}
 
export default Result;