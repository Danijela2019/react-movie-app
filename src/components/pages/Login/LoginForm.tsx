//@ts-nocheck
import React, {useState} from 'react'
import {FormContainer,FormField,LoginContainer,FormControl,FormIcons, LoginText,LoginAnchor,LoginTextWrapper} from './LoginElements'
import Icon from '../../icon'
import { AiOutlineLock,AiOutlineUser } from "react-icons/ai";
import Button from '../../button'


export const LoginForm = () => {
    const [state,setState] = useState({
        email : "",
        password : ""
    });

    const handleSubmit = (event) => {
        event.preventDefault()
        if(state.email.length > 0 && state.password.length > 0) {
            console.log('I got submited')
            setState({
                email : "",
            password : ""
            })
        } else {
            console.log('Both fileds are required to submit')
        }

    }
    
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
    
    return (
        <LoginContainer>
            <FormContainer>
                <FormField>
                    <FormIcons>
                        <Icon size='20px' color='var(--color-background)'>
                            <AiOutlineUser/>
                        </Icon>
                    </FormIcons>
                    <FormControl as='input'
                        type="email"
                        name="name-input"
                        id="email"
                        placeholder='Email'
                        value={state.email}
                        required
                        aria-describedby="emailHelp"
                        onChange={handleChange}
                    />
                </FormField>
                <FormField>
                    <FormIcons>
                        <Icon size='20px' color='var(--color-background)'>
                            <AiOutlineLock/>
                        </Icon>
                    </FormIcons>
                    <FormControl as='input'
                        type="password"
                        name="password-input"
                        id="password"
                        placeholder='Password'
                        value={state.password}
                        required
                        onChange={handleChange}
                    />
                </FormField>
                <Button
                margin='1rem 0 0 0'
                bg='var(--color-primary)'
                fontSize='16px'
                width='100%'
                height='50px'

                clicked={handleSubmit}
                > LOG IN </Button>
                <LoginTextWrapper>
                <LoginText>Dont have an account?</LoginText>
                <LoginAnchor>Sign up</LoginAnchor> 
                </LoginTextWrapper>
            </FormContainer>
        </LoginContainer>

    )
}

export default LoginForm;
