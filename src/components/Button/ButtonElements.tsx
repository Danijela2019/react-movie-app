//@ts-nocheck
import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${(props) => props.bg};
  font-size: ${(props) => props.fontSize};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 10px;
  cursor:pointer;
  border:none;
  padding:0;
@media (max-width: 370px) {
    width: 6rem;
    height: 3rem;
  }`;

  export const ButtonWrapper = styled.div`
  margin: ${(props) => props.margin ? props.margin : null};
  background:transparent;
  `;