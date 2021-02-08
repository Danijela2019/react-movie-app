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
overflow: hidden;
`;

export const NavLink = styled(Link)`
font-size: 1.5rem;
display:flex;
background:transparent;
text-decoration:none;
align-items:center;
cursor:pointer;
margin:0 2.5rem;
color:#cacad4;

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

export const SearchBox = styled.div`
width: 40%;
background:transparent;
`

export const SearchInput = styled.input`
  margin-top: .5rem;
  font-size: 17px;
  border: none;
  color:black;
  background:#cacad4;
  cursor:pointer;
  border-radius:5px 0 0 5px ;
  border-right: none;
  height:30px;
  width:100%`

  export const SearchForm = styled.form`
  display:flex;
  justify-content:flex-end;
  align-items:center;
  `
    
  
export const SearchButton = styled.button`

text-align: center;
 cursor: pointer;
  margin-top: 0.5rem;
  margin-right: 16px;
  background: #13b300;
  border: none;
  cursor: pointer;
  width:30px;
  height: 30px;
 border-radius: 0 5px 5px 0 ;
  border-right: none;
  `
   
  
  


