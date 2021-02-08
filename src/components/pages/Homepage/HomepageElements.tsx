// @ts-nocheck
import styled from 'styled-components';
import cover from '../../../assets/it.png';

export const HeroTitle = styled.h1`
background:transparent;
margin:4rem 0 0 3rem;
font-size:3.5rem;
color:#cacad4;
@media (max-width: 370px) {
  font-size:2.5rem;
  margin:1rem 0 0 1rem;      
};`

export const HeroParagraph = styled(HeroTitle)`
font-size:1.2rem;
margin-top:0;
margin-bottom:auto;
`
export const HomeCardText = styled.p`
text-align:justify;
color:#cacad4;
`
export const  HomeCardContent = styled.div`
display:flex;
flex-direction:column;
justify-content: space-around;
align-items:center;
text-align:center;
padding:1rem;
border:solid 2px green;
height:100%;
border-radius:10px;
`

export const HeroCover = styled.div`
background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) ),
url(${props => props.cover ? props.cover:cover});
height: 100%;
background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display:flex;
  flex-direction: column;
`;

export const HeroCoverContainer = styled.div`
height:100vh;
`;