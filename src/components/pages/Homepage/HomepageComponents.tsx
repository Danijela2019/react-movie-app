import styled from 'styled-components';
import React from 'react'
import cover from '../../../assets/it7.png'

export const CoverContainer= styled.div`
background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) ),url(${cover});
width: 100%;
  height: 75vh;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
`;
 
export const Title = styled.h1`
color:white;
background:transparent;
display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
`;
 


