import React, { Component } from 'react';
import Input from './Input';
import "./css/Form.css"
import Button from './Button';
class LoginForm extends Component {
    constructor(props){
        super(props);
    }
    render() { 
        return ( 
            <form className="form__" action="https://console.firebase.google.com/u/1/project/dbp-cijs-d05-bd74a/firestore/data~2F" method="POST">
                <h2>Login</h2>
                <Input typeInput="text" notice="Username" kind="Username"/>
                <Input typeInput="password" notice="Password" kind="Password"/>
                <div className="container__btn">
                    <Button>Login</Button><br/>
                    <p>You don't have any account? <a href="#"> Sign up</a></p>
                </div>
            </form>
         );
    }
}
 
export default LoginForm;