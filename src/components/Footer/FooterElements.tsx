import styled from 'styled-components';

export const FooterContainer = styled.div`
background:black;
  color:#cacad4;
  position: relative;
  bottom: 0;
  width: 100%;
  margin-top:2rem;
  `;

export const FooterLine = styled.div`
 border-top:1px solid;
 display:flex;
 justify-content: center;
`;

export const Anchor = styled.a`
  color: white;
  text-decoration: none;
  font-size:2rem;
`;


export const FooterWrapper = styled.div`
    display:flex;
  justify-content:space-around;
  align-items:center;
  padding:1rem;
  @media (max-width: 370px) {
  flex-direction: column;
  margin-bottom:2rem;
  };
`


export const LogoWrapper = styled.div`
display:flex;
`

export const FollowMeWrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
@media (max-width: 370px) {
margin-top:2rem;
  };
` 