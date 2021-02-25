//@ts-nocheck
import React, {useState} from 'react'
import { AiOutlineLock,AiOutlineUser } from "react-icons/ai";
import Button from '../../button'
import {useHistory} from 'react-router-dom'
import FormWrapper from '../../form/FormWrapper';
import FormField from '../../form/FormFiled';
import FormIconWrapper from'../../form/FormIconWpapper'
import {FormTextWrapper,FormControl,FormAnchor,FormText,ErrorMsg} from '../../form/FormElements'
import {isValidEmail} from '../../../util/inputValidation'


export const RegisterForm = () => {
    const [state,setState] = useState({
        email : "",
        password : "",
        confirmPassword: ""
    })
    const [error, setError] = useState({})
    const[invalidEmail ,setInvalidEmail] = useState(false);
    const[invalidPass ,setInvalidPass] = useState(false);

    
    const handleSubmit = (event) => {
        event.preventDefault()
        if(!isValidEmail(state.email)){
            error.invalidEmail = "Please enter valid email address.";
            setError(error);
            setInvalidEmail(true)}
            else{
            setState({
                email : "",
                password : "",
                confirmPassword: ""
            })
            setInvalidEmail(false)
        console.log('I was submited-register')
            }
    }
       
    let history = useHistory();
    // once we are logged in successfully
    const redirectToHome = () => {
        history.push('/home');
    }
    const redirectToLogin = () => {
        history.push('/login'); 
    }
    
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    } 

    const isEmpty = (email, pass,confirmPass) => {
         return email.length > 0 && pass.length > 0 && confirmPass.length > 0
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
                    autofokus
                    aria-describedby="emailHelp"
                    onChange={handleChange}
                    autoComplete='off'
                />
                <ErrorMsg error={invalidEmail}>{error.invalidEmail}</ErrorMsg>
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
            </FormField>
            <FormField>
                <FormIconWrapper>
                    <AiOutlineLock/>
                </FormIconWrapper>
                <FormControl as='input'
                    type="password"
                    name="password-input"
                    id="confirmPassword"
                    placeholder='Password'
                    value={state.confirmPassword}
                    required
                    onChange={handleChange}
                    autoComplete='off'
                />
            </FormField>
            <Button
                margin='1rem 0 0 0'
                bg='var(--color-primary)'
                fontSize='16px'
                width='100%'
                height='50px'
                disabled={!isEmpty(state.email, state.password, state.confirmPassword)}
                clicked={handleSubmit}
            > REGISTER </Button>
            <FormTextWrapper>
                <FormText>Already have an account?</FormText>
                <FormAnchor onClick={() => redirectToLogin()}>Sign in</FormAnchor> 
            </FormTextWrapper>
        </FormWrapper>
    )
}

export default RegisterForm;
