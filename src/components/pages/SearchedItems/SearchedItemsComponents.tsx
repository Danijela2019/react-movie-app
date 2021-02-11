//@ts-nocheck
import styled from 'styled-components';

export const SearchedContainer = styled.div`
background:var(--color-background);
`
export const SearchedCardContainer= styled.div`
width:85%;
margin:1rem auto;
border-radius:5px;
box-shadow: 0 70px 63px -60px #000000;
@media (max-width: 600px) {
  margin:1rem auto;
  padding:0; 
  background-color:var(--color-background); 
  width:100%    
};
`
export const SearchedCardBoardContainer = styled.div`
background-color:var(--color-altBackground);
padding:.5rem;
@media (max-width: 710px) {
  margin:0; 
  padding:0;
  background-color:var(--color-background);
};` 

export const Image = styled.img`
height:200px;
width:auto;
@media (max-width: 710px) {
  width:100%;
  height:auto;   
};` 


export const SearchedContentWrapper = styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;
color:var(--color-text);
background-color:var(--color-background);
padding:.5rem;
@media (max-width: 780px) {  
  flex-direction:column; 
  align-items:center;
  padding:0;
  };
`