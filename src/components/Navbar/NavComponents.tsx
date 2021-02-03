import styled from 'styled-components';
import React from 'react'
import {NavLink as Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
background:transparent;
height:80px;
display:flex;
justify-content:center;
font-weight:700;
`;
 
export const NavLink = styled(Link)`
color: white;
font-size: 1.5rem;
display:flex;
background:transparent;
text-decoration:none;
align-items:center;
cursor:pointer;

@media screen and (max-width:400px){
    position:absolute;
    top:10px;
    left:25px;
}`;

export const NavIcon = styled.div`
display:block;
position:absolute;
top:0;
right:0;
cursor:pointer;
color:white;`

export const Bars = styled(FaBars)`
font-size:2rem;
transform:translate(-50%,-15%)
`
