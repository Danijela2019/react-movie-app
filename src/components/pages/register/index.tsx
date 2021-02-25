//@ts-nocheck
import React from 'react';
import RegisterForm from './RegisterForm';
import regBackground from '../../../assets/alita.jpg'
import { Background } from '../../shared/Background';

const Register = () => {
    return (
        <Background background={regBackground}>
            <RegisterForm/>
        </Background>
    )
}

export default Register;