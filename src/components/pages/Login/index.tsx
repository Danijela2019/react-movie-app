import React from 'react';
import {  LoginBackground} from './LoginElements';
import Navbar from '../../Navbar'
import Footer from '../../Footer';
import LoginForm from './LoginForm';

const Login = (props: any) => {
    return (
        <React.Fragment>
        <LoginBackground>
            <Navbar/>
            <LoginForm/>
        </LoginBackground>
        <Footer/>
        </React.Fragment>
    )
}

export default Login;