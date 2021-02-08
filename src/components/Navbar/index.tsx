import React from 'react'
import Icon from '../Icon'
import {AiOutlineSearch} from 'react-icons/ai';
import {Nav, NavLink, NavIcon,Bars,SearchBox,SearchInput, SearchButton, SearchForm} from './NavComponents'

const Navbar = () => {
    return (
        <React.Fragment>
        <Nav>
        
            <NavLink to ='/'>Home</NavLink>
            <NavLink to ='/'>Login</NavLink>
            <NavLink to ='/'>Favorites</NavLink>
            <SearchBox>
        <SearchForm>
        <SearchInput as='input'
        type="text"
        />
        <SearchButton>
            <Icon color='black' size='18px'>
            <AiOutlineSearch/>
                
            </Icon>
        </SearchButton>
        </SearchForm>
        </SearchBox>
           {/* <NavIcon>
             <p>MENU</p> 
             <Bars/>  
            </NavIcon>
            */}
        </Nav>  
        </React.Fragment>
    )
}

export default Navbar;

