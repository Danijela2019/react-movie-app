import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import Icon from '../Icon';
import { NavbarLink, NavbarLinks,NavLink, MobileNavbar, SearchBox, SearchButton, SearchForm, SearchInput } from './NavElements'

const NavItems = (props:any) => {
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
    </React.Fragment>
  );

  return <>{sidebar ? <MobileNavbar>{links}</MobileNavbar> : <NavbarLinks>{links}</NavbarLinks>}</>;
};

export default NavItems;