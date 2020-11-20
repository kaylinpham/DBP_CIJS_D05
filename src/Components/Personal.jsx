import React, { Component } from 'react';
import "./css/Personal.css";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/performance";
import firebase from "../config/firebase.config";
class Personal extends Component {
    constructor(props){
        super(props);
        this.state={};
    }
    componentDidMount() {
        const storageRef = firebase.storage().ref();
        let spaceRef = "iconfinder_941-23_4619660.png";
        storageRef
          .child(spaceRef)
          .getDownloadURL()
          .then((url) => {
            this.setState({ url: url });
          })
          .catch((err) => console.log(err));
      }
    render() { 
        return ( 
            <div className="container__person">
                <img onClick={this.props.onLogOut} src={this.state.url}/>
                <p>{this.props.user}</p>
            </div>
         );
    }
}
 
export default Personal;