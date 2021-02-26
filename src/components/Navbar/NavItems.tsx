import React from 'react';

import Search from './search';
import { NavbarLink, NavbarLinks, NavLink, MobileNavbar } from './NavElements';
import { INavItemProps } from '../../frontEndTypes';

const NavItems = (props: INavItemProps): React.ReactElement => {
  const { sidebar, closeMenu } = props;

  const links = (
    <>
      <NavbarLink onClick={closeMenu}>
        <NavLink exact to="/">
          HOME
        </NavLink>
      </NavbarLink>
      <NavbarLink onClick={closeMenu}>
        <NavLink to="/login"> LOGIN </NavLink>
      </NavbarLink>
      <NavbarLink onClick={closeMenu}>
        <NavLink to="/register"> REGISTER </NavLink>
      </NavbarLink>
      <NavbarLink onClick={closeMenu}>
        <NavLink to="/favorites"> FAVORITES </NavLink>
      </NavbarLink>
      <Search />
    </>
  );

  return <>{sidebar ? <MobileNavbar>{links}</MobileNavbar> : <NavbarLinks>{links}</NavbarLinks>}</>;
};

export default NavItems;
