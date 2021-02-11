//@ts-nocheck
import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${(props) => props.bg};
  font-size: ${(props) => props.fontSize};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  outline:none;
  border-radius: 10px;
  cursor:pointer;
  border:none;
  padding:0;
 @media (max-width: 540px) {
    max-width: 80%;
    height: 50px;
    margin:0.5rem;
    font-size:25px;
  }`

  export const ButtonWrapper = styled.div`
  margin: ${(props) => props.margin ? props.margin : null};
  background:transparent;
  `;