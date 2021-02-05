//@ts-nocheck
import styled from 'styled-components';


export const CardContainer = styled.div`
background-color: black;
margin: ${(props) => props.margin};
border-radius:10px;
width: ${(props) => props.width};
height: ${(props) => props.height};
box-shadow: 0px 0px 10px 10px  #1f1d1d;
@media (max-width: 376px) {
margin: 1rem;
max-width:18rem;
max-height:27rem;
}
`

