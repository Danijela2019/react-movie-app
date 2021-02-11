import React, {useState} from 'react'
import Icon from '../Icon'
import {AiOutlineSearch} from 'react-icons/ai';
import {SearchBox,SearchInput, SearchButton, SearchForm, NavImage,NavbarContainer, NavbarWrapper,NavbarLogo,NavbarToggle} from './NavElements'
import logo from '../../assets/tv.png';
import { AiOutlineMenu } from 'react-icons/ai';
import NavItems from './NavItems';

const Logo = (): React.ReactElement => {
  return <NavImage as='img' src={logo} alt="A text and logo of the company"/>;
};


const Navbar = (): React.ReactElement => {
  const [sidebar, setSidebar] = useState(false);
  const handleClick = () => setSidebar(!sidebar);
  const closeMobileMenu = () => setSidebar(false);
  return (
    <NavbarContainer>
      <NavbarWrapper>
        <NavbarLogo>
          <Logo />
        </NavbarLogo>
        <NavbarToggle onClick={handleClick}>
          <Icon size="40px" color="var(--color-text)">
            <AiOutlineMenu />
          </Icon>
        </NavbarToggle>
      </NavbarWrapper>
      <NavItems sidebar={sidebar} closeMenu={closeMobileMenu} />
    </NavbarContainer>
  );
};


export default Navbar;

