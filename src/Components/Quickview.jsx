import React, { Component } from 'react';
import "./css/Quickview.css"
class Quickview extends Component {
    constructor(props){
        super(props);
    }
    render() { 
        return ( 
            <div className="quickview">
                <b>Pham Ha Giang</b>
                <p>FPT University HCM</p>
            </div>
         );
    }
}
 
export default Quickview;