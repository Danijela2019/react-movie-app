//@ts-nocheck
import styled ,{css} from 'styled-components';


export const PageContentWrapper = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`

export const Div1 = styled.div`
background:black;
`

export const Card1 = styled.div`
width:85%;
margin:1rem auto;

border-radius:5px;
box-shadow: 0 70px 63px -60px #000000;

@media (max-width: 600px) {
  margin:1rem auto;
  padding:0; 
  background-color:black; 
  width:100%    
};
`
export const Container = styled.div`
background-color:#bcbcc0;
padding:.5rem;
@media (max-width: 710px) {
  margin:0; 
  padding:0;
  background-color:black;
};` 

export const Image = styled.img`
height:200px;
width:auto;
@media (max-width: 710px) {
  width:100%;
  height:auto;   
};` 



export const MovieText = styled.p`
font-size:.7rem;
@media (max-width: 710px) {
  font-size: 1rem; 
};` 
