//@ts-nocheck
import React, {useState} from 'react'
import { AiOutlineLock,AiOutlineUser } from "react-icons/ai";
import Button from '../../button'
import {useHistory} from 'react-router-dom'
import FormWrapper from '../../form/FormWrapper';
import FormField from '../../form/FormFiled';
import FormIconWrapper from'../../form/FormIconWpapper'
import {FormTextWrapper,FormControl,FormAnchor,FormText,ErrorMsg} from '../../form/FormElements'



export const LoginForm = () => {
    const [state,setState] = useState({
        email : "",
        password : "",
    });
    const [errors, setErrors] = useState({})

    const isEmpty = (email, pass) => {
        return email.length > 0 && pass.length > 0 
    }

    /*const isValidEmail = (value) => {
        const regex=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
        return regex.test(value.toLowerCase());

    } */


    const inputValidation = () => {
        let errors = {};
        let isValid = true;
        if (typeof state.email !== "undefined") {
            const regex=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
             if (regex.test(state.email.toLowerCase())) {
                isValid = false;
                errors.invalidEmail = "Please enter valid email address.";
                console.log(errors.invalidEmail)
        
            }
        }
        setErrors(errors);
        return isValid;
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(!inputValidation){
            console.log('I was not validated')
        } else {
            setState({
                email : "",
                password : ""
            })
            console.log('I was subbmited')
        }
            
    } 

    let history = useHistory();
    // once we are logged in successfully
    const redirectToHome = () => {
        history.push('/home');
    }
    // for new users
    const redirectToRegister = () => {
        history.push('/register'); 
    }
    
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
    
    return (
        <FormWrapper>
            <FormField>
                <FormIconWrapper>
                    <AiOutlineUser/>
                </FormIconWrapper>
                <FormControl as='input'
                    type="email"
                    name="name-input"
                    id="email"
                    placeholder='Email'
                    value={state.email}
                    required
                    aria-describedby="emailHelp"
                    onChange={handleChange}
                    autoComplete='off'
                    autofokus
                />
                <ErrorMsg>{errors.invalidEmail}</ErrorMsg>
            </FormField>
            <FormField>
                <FormIconWrapper>
                    <AiOutlineLock/>
                </FormIconWrapper>
                <FormControl as='input'
                    type="password"
                    name="password-input"
                    id="password"
                    placeholder='Password'
                    value={state.password}
                    required
                    onChange={handleChange}
                    autoComplete='off'
                />
                    <ErrorMsg error={errors.hasOwnProperty('invalidPassword')}>I have an error</ErrorMsg>
            </FormField>
            <Button
                margin='1rem 0 0 0'
                bg='var(--color-primary)'
                fontSize='16px'
                width='100%'
                height='50px'
                disabled={!isEmpty(state.email, state.password)}
                clicked={handleSubmit}
            > LOG IN </Button>
            <FormTextWrapper>
                <FormText>Dont have an account?</FormText>
                <FormAnchor onClick={() => redirectToRegister()}>Sign up</FormAnchor> 
            </FormTextWrapper>
        </FormWrapper>
    )
}

export default LoginForm;
