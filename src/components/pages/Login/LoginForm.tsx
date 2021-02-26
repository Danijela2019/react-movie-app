// @ts-nocheck
import React, { useState } from 'react';
import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import Button from '../../button';
import FormWrapper from '../../form/FormWrapper';
import FormField from '../../form/FormField';
import FormIconWrapper from '../../form/FormIconWpapper';
import {
  FormTextWrapper,
  FormControl,
  FormAnchor,
  FormText,
  ErrorMsg,
} from '../../form/FormElements';
import { isValidEmail } from '../../../util/inputValidation';

const LoginForm = (): React.ReactElement => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState({});
  const [invalidEmail, setInvalidEmail] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!isValidEmail(state.email)) {
      error.invalidEmail = 'Please enter valid email address.';
      setError(error);
      setInvalidEmail(true);
    } else {
      setState({
        email: '',
        password: '',
      });
      setInvalidEmail(false);
    }
  };

  const history = useHistory();
  const redirectToRegister = () => {
    history.push('/register');
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const isEmpty = (email: string, pass: string) => {
    return email.length > 0 && pass.length > 0;
  };

  return (
    <FormWrapper>
      <FormField>
        <FormIconWrapper>
          <AiOutlineUser />
        </FormIconWrapper>
        <FormControl
          as="input"
          type="email"
          name="name-input"
          id="email"
          placeholder="Email"
          value={state.email}
          required
          aria-describedby="emailHelp"
          onChange={handleChange}
          autoComplete="off"
          autofokus
          error={invalidEmail}
        />
        <ErrorMsg error={invalidEmail}> {error.invalidEmail}</ErrorMsg>
      </FormField>
      <FormField>
        <FormIconWrapper>
          <AiOutlineLock />
        </FormIconWrapper>
        <FormControl
          as="input"
          type="password"
          name="password-input"
          id="password"
          placeholder="Password"
          value={state.password}
          required
          onChange={handleChange}
          autoComplete="off"
        />
        <ErrorMsg error={invalidEmail}> The user name and password do not match</ErrorMsg>
      </FormField>
      <Button
        margin="1rem 0 0 0"
        bg="var(--color-primary)"
        fontSize="16px"
        width="100%"
        height="50px"
        disabled={!isEmpty(state.email, state.password)}
        clicked={handleSubmit}
      >
        {' '}
        LOG IN{' '}
      </Button>
      <FormTextWrapper>
        <FormText>Dont have an account?</FormText>
        <FormAnchor onClick={() => redirectToRegister()}>Sign up</FormAnchor>
      </FormTextWrapper>
    </FormWrapper>
  );
};

export default LoginForm;
