//@ts-nocheck
import React from 'react'
import {FormContainer,FormField,LoginContainer,FormControl,FormIcons, LoginText,LoginAnchor,LoginTextWrapper} from './LoginElements'
import Icon from '../../Icon'
import { AiOutlineLock,AiOutlineUser } from "react-icons/ai";
import Button from '../../Button'



export const LoginForm = () => {
    return (
        <LoginContainer>
            <FormContainer>
                <FormField>
                    <FormIcons>
                        <Icon size='20px' color='black'>
                            <AiOutlineUser/>
                        </Icon>
                    </FormIcons>
                    <FormControl
                        className="loginInput"
                        type="e-mail"
                        name="name-input"
                        id="fEmail"
                        placeholder='Email'
                    />
                </FormField>
                <FormField>
                    <FormIcons>
                        <Icon size='20px' color='black'>
                            <AiOutlineLock/>
                        </Icon>
                    </FormIcons>
                    <FormControl
                        className="loginPassword"
                        type="password"
                        name="password-input"
                        id="fPassword"
                        placeholder='Password'
                    />
                </FormField>
                <Button
                margin='1rem 0 0 0'
                bg='#13b300'
                fontSize='16px'
                width='100%'
                height='50px'> LOG IN </Button>
                <LoginTextWrapper>
                <LoginText>Dont have an account?</LoginText>
                <LoginAnchor>Sign up</LoginAnchor> 
                </LoginTextWrapper>
            </FormContainer>
        </LoginContainer>

    )
}

export default LoginForm;
