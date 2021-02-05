//@ts-nocheck
import React from 'react'
import {StyledButton,ButtonWrapper} from './ButtonElements'


const Button = (props:any) => {
  return (
    <ButtonWrapper margin={props.margin}>
      <StyledButton
        bg={props.bg}
        fontSize={props.fontSize}
        width={props.width}
        height={props.height}
      >
        {props.children}
      </StyledButton>
    </ButtonWrapper>
  );
};
export default Button;

// onClick={props.clicked}