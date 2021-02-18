import React from 'react';

import Search from './search'
import { NavbarLink, NavbarLinks,NavLink, MobileNavbar} from './NavElements'
import { INavItemProps } from '../../frontEndTypes';

const NavItems = (props:INavItemProps) => {
  const { sidebar, closeMenu } = props;
  
  const links = (
    <React.Fragment>
      <NavbarLink onClick={closeMenu}>
        <NavLink  exact to="/">
          HOME
        </NavLink>
      </NavbarLink>
      <NavbarLink onClick={closeMenu}>
        <NavLink  to="/login">
          {' '}
          LOGIN{' '}
        </NavLink>
      </NavbarLink>
      <NavbarLink onClick={closeMenu}>
        <NavLink  to="/favorites">
          {' '}
          FAVORITES{' '}
        </NavLink>
      </NavbarLink>
     <Search/>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      {sidebar ? <MobileNavbar>{links}</MobileNavbar> : <NavbarLinks>{links}</NavbarLinks>}
    </React.Fragment>);
};

export default NavItems;