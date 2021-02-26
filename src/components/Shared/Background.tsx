//@ts-nocheck
import styled from 'styled-components';
import placeholder from '../../assets/backgroundImages/it.jpg'


export const Background = styled.div`
background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) ),
url( ${(props) => props.background? props.background : placeholder}); 
height: ${props => props.height ? props.height:'100vh'};
background-position: center;
background-repeat: no-repeat;
background-size: cover;
box-shadow: ${props => props.light ? props.light:'40px 40px 210px 130px var(--color-background) inset'};
 ;` 

