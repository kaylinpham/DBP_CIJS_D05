import React, { Component } from 'react';
import Input from "./Input";
import Button from "./Button";
import "./css/Form.css"
class SignUpForm extends Component {
    constructor(props){
        super(props);
    }
    render() { 
        return ( 
            <form className="form__" action="https://console.firebase.google.com/u/1/project/dbp-cijs-d05-bd74a/firestore/data~2F" method="POST">
                <h2>Sign Up</h2>
                <Input typeInput="text" notice="abc@domain.com" kind="Email"/>
                <Input typeInput="text" notice="Username" kind="Username"/>
                <Input typeInput="password" notice="Password" kind="Password"/>
                <div className="container__btn">
                    <Button>Sign Up</Button><br/>
                    <p>You already have an account? <a href="#"> Login</a></p>
                </div>
            </form>
         );
    }
}
 
export default SignUpForm;