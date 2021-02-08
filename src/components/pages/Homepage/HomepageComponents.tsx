import styled from 'styled-components';

export const Text = styled.h1`
background:transparent;
margin:4rem 0 0 3rem;
font-size:3.5rem;
color:#cacad4;
@media (max-width: 370px) {
  font-size:2.5rem;
  margin:1rem 0 0 1rem;      
};`

export const Trend = styled(Text)`
margin-left:1rem;
font-size:2rem;
`;

export const Paragraph = styled(Text)`
font-size:1.2rem;
margin-top:0;
margin-bottom:auto;
`
export const CardTitle = styled.h1`
color:#cacad4;
`

export const Img = styled.div`
        max-width: 100%;
        max-height: 100%;
        display: block;  
`

export const  CardContent = styled.div`
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
export const CardText = styled.p`
text-align:justify;
color:#cacad4;
`
