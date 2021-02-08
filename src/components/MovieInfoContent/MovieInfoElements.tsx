import styled from 'styled-components';

export const MovieInfo= styled.p`
margin: .5rem;
`
export const MovieDataColumn = styled.div`
display:flex;
flex-direction:column;
align-items:center;
max-width:30%;
margin:1rem;
padding:1rem;
@media (max-width: 780px) {
 max-width:100%;
 width:100%;
 margin:1rem .2rem;
};`

export const MovieContentWrapper = styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;
color:white;
background-color:black;
@media (max-width: 780px) {  
  flex-direction:column; 
  align-items:center;
  };
`
