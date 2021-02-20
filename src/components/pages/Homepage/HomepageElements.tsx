import styled from 'styled-components';

import cover from '../../../assets/it.jpg';
import { IHeroCoverProps } from '../../../frontEndTypes';

export const HeroTitle = styled.h1`
background:transparent;
margin:4rem 0 0 3rem;
font-size:3.5rem;
color:var(--color-text);
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
color:var(--color-text);
`
export const  HomeCardContent = styled.div`
display:flex;
flex-direction:column;
justify-content: space-around;
align-items:center;
text-align:center;
padding:1rem;
border:solid 2px var(--color-primary);
height:100%;
border-radius:10px;
`


export const HeroCover = styled.div<IHeroCoverProps>`
background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) ),
url(${props => props.cover ? props.cover:cover});
height: 100%;
background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display:flex;
  flex-direction: column;
  box-shadow: 30px 30px 150px 100px black  inset;
`;

export const HeroCoverContainer = styled.div`
height:100vh;
`;

export const InfoCardContainer = styled.div`
background-color: var(--color-backgrouns);
margin:4rem 0;
border-radius:10px;
width: 19rem;
height: 25rem;
box-shadow: 0px 0px 10px 10px  #1f1d1d;`



  