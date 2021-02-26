import React from 'react';
import LoginForm from './LoginForm';
import loginBackground from '../../../assets/backgroundImages/blade_runner.jpg'
import { Background } from '../../shared/Background';

const Login = () => {
    return (
        <Background background={loginBackground}>
            <LoginForm/>
        </Background>
    )
}

export default Login;