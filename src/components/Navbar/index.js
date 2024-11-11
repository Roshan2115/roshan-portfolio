import React from 'react';
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
  
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <div style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </div>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </MobileIcon>
        <NavItems>
          <NavLink onClick={() => setIsOpen(false)} to="#about">About</NavLink>
          <NavLink onClick={() => setIsOpen(false)} to="#skills">Skills</NavLink>
          <NavLink onClick={() => setIsOpen(false)} to="#experience">Experience</NavLink>
          <NavLink onClick={() => setIsOpen(false)} to="#projects">Projects</NavLink>
          <NavLink onClick={() => setIsOpen(false)} to="#education">Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink onClick={() => { setIsOpen(false); window.location.hash = '#about'; }}>About</MobileLink>
            <MobileLink onClick={() => { setIsOpen(false); window.location.hash = '#skills'; }}>Skills</MobileLink>
            <MobileLink onClick={() => { setIsOpen(false); window.location.hash = '#experience'; }}>Experience</MobileLink>
            <MobileLink onClick={() => { setIsOpen(false); window.location.hash = '#projects'; }}>Projects</MobileLink>
            <MobileLink onClick={() => { setIsOpen(false); window.location.hash = '#education'; }}>Education</MobileLink>
            <GitHubButton style={{ padding: '10px 16px', background: theme.primary, color: 'white', width: 'max-content' }} href={Bio.github} target="_blank">Github Profile</GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
