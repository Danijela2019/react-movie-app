//@ts-nocheck
import styled from 'styled-components';
import cover from '../../assets/it.png'

export const CoverContainer = styled.div`
background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) ),
url(${props => props.cover ? props.cover:cover});
height: 100%;
background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display:flex;
  flex-direction: column;
`;

export const CoverContainerWrapper = styled.div`
height:100vh;
`;