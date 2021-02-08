//@ts-nocheck
import styled from 'styled-components';
import cover from '../../../assets/it.png'

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

export const TitleContainer = styled.div`
background:transparent;
position:absolute;
bottom: 120px;
left:200px;
@media (max-width: 370px) {
  bottom:-80px;  
  left:100px; 
};`

export const ContentTextWrapper = styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;
color:white;
flex-wrap:wrap;
background-color:black;
@media (max-width: 650px) {
  flex-wrap: nowrap;   
  
  flex-direction:column; 
  align-items:center;
  };
`
export const MovieDataColumn = styled.div`
display:flex;
flex-direction:column;
align-items:center;
max-width:30%;
margin:1rem;
padding:1rem;
@media (max-width: 650px) {
 max-width:100%;
 width:100%;
 margin:1rem .2rem;
};`

export const Wrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
`
export const MovieInfo= styled.p`
margin: .5rem;
`

