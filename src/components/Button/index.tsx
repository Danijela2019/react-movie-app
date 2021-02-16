import React from 'react'
import { IButtonProps } from '../../types';
import {StyledButton,ButtonWrapper} from './ButtonElements'


const Button = (props:IButtonProps) => {
  return (
    <ButtonWrapper margin={props.margin}>
      <StyledButton
        bg={props.bg}
        fontSize={props.fontSize}
        width={props.width}
        height={props.height}
        onClick={props.clicked}
      >
        {props.children}
      </StyledButton>
    </ButtonWrapper>
  );
};
export default Button;

