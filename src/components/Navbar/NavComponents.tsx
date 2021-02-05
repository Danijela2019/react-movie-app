import styled from 'styled-components';
import React from 'react'
import {NavLink as Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
background:transparent;
height:50px;
display:flex;
justify-content:flex-end;
font-weight:700;
`;
 
export const NavLink = styled(Link)`
font-size: 1.5rem;
display:flex;
background:transparent;
text-decoration:none;
align-items:center;
cursor:pointer;
margin:0 2.5rem;

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
color: #cacad4;`

export const Bars = styled(FaBars)`
font-size:2rem;
transform:translate(-50%,-15%)
`
export const searchContainer = styled.div`

`