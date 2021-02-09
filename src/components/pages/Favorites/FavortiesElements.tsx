import styled from 'styled-components';
import background from '../../../assets/doctor-strange.jpg'

export const FavoritesBackground = styled.div`
background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) ),
url(${background}); ;
height: 100%;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
box-shadow: 40px 40px 210px 130px black inset; 
`