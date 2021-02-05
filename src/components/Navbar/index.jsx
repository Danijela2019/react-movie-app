import React from 'react'
import {Nav, NavLink, NavIcon,Bars} from './NavComponents'

const Navbar = () => {
    return (
        <React.Fragment>
        <Nav>
            <NavLink to ='/'>Home</NavLink>
            <NavLink to ='/'>Login</NavLink>
            <NavLink to ='/'>Favorites</NavLink>
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
