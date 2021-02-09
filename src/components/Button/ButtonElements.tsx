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
  &:hover {
    background-color:#f3f8e6;
    transition: 0.5s;
  }
  @media (max-width: 600px) {
    width:80%;
  }
@media (max-width: 540px) {
    width: 250px;
    height: 50px;
    margin:0.5rem;
    font-size:25px;
  }`

  export const ButtonWrapper = styled.div`
  margin: ${(props) => props.margin ? props.margin : null};
  background:transparent;
  `;