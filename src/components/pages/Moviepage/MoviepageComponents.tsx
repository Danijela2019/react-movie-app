//@ts-nocheck
import styled from 'styled-components';

export const MovieImage = styled.div`
position: absolute; 
bottom: 0px;
`;

export const Background1 = styled.div`
background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) ),
url(${props => props.cover ? props.cover:cover}); ;
height: 100vh;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
box-shadow: 40px 40px 210px 130px black  inset;
position: relative; 
`;

export const ButtonContainer = styled.div`
background:transparent;
position:absolute;
bottom: 120px;
left:200px;
@media (max-width: 370px) {
  bottom:-80px;  
  left:30px; 
};`

export const ContentTextWrapper = styled.div`
display:flex;
justify-content:space-around;
color:white;
margin:2rem;
@media (max-width: 370px) {
  flex-direction:column;
  margin-top:3rem;
};`

export const MovieDataColumn = styled.div`
display:flex;
flex-direction:column;
align-items:center;
max-width:30%;
margin:1rem;
@media (max-width: 370px) {
 max-width:100%;
 margin:1rem .2rem;
};`

export const Wrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
justify-content:center;
`
export const MovieInfo= styled.p`
margin: .5rem;
`
