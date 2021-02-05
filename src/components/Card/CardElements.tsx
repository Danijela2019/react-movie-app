//@ts-nocheck
import styled from 'styled-components';


export const CardContainer = styled.div`
background-color: black;
flex-direction: column;
justify-content: center;
margin-bottom: .5rem;
align-items: center;
border-radius:10px;
width: ${(props) => props.width};
height: ${(props) => props.height};
box-shadow: 0px 0px 10px 5px  #1f1d1d;
`
/*height:15rem;
display: flex; */