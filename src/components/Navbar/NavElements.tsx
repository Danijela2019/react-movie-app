import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom';

export const NavLink = styled(Link)`
font-size: 1.5rem;
display:flex;
background:transparent;
text-decoration:none;
align-items:center;
cursor:pointer;
color:#cacad4;
&:hover,
&:active {
  border-bottom: 3px solid  #13b300;
  color: #13b300;
}`
   
export const NavImage = styled.img`
 height: 100%;
`
export const NavbarContainer = styled.nav`
  height: 50px;
  width: 100%;
  display: flex;
  background:transparent;
  justify-content: space-between;
  align-items: stretch;
  
  @media (max-width: 767px) {
    flex-direction: column;
    height: auto;
    padding: 0.5rem;
  }`;

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 0.5rem;
  }
`;
export const NavbarLogo = styled.div`
  display: block;
  height: 90%;
  @media (max-width: 767px) {
    display: none;
  }
`;
export const NavbarToggle = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: flex;
  }
`;

export const NavbarLink = styled.li`
  margin: 0 1rem;
  @media (max-width: 767px) {
    margin: 1rem 0;
  }
`;

export const NavbarLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
  text-transform: uppercase;
  transition: 0.2s;
  padding: 1rem;
  @media (max-width: 767px) {
    display: none;
    flex-direction: column;
  }
`;

export const MobileNavbar = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background:#00000057;
  list-style-type: none;
  text-transform: uppercase;
  transition: 0.2s;
  padding: 1rem;
`;

export const SearchBox = styled.div`
width: 30%;
background:transparent;
@media (max-width: 767px) {
    width:80%;
  }
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
  


