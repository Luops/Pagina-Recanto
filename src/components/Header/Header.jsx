import React from 'react'


//Styled components
import { 
    StyledContainer,
    Logo,
    StyledNavbarCollapse,
    StyledNav,
    StyledNavLink,
    StyledNavBar
  } from "./styles"

//Bootstrap
import {
    Container,
    Nav,
    Navbar,
} from 'react-bootstrap';

const Header = () => {
  return (
    <StyledNavBar collapseOnSelect expand="lg" bg="white" variant="white">
      <StyledContainer>
        <Logo href="/" id='Logo'>Recanto</Logo>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <StyledNavbarCollapse id="responsive-navbar-nav" >
          <StyledNav>
            <StyledNavLink href="#Quem somos">Quem somos</StyledNavLink>
            <StyledNavLink href="#Cardápio">Cardápio</StyledNavLink>
            <StyledNavLink href="#Eventos">Eventos</StyledNavLink>
            <StyledNavLink href="#Contatos">Contatos</StyledNavLink>
          </StyledNav>
        </StyledNavbarCollapse>
      </StyledContainer>
    </StyledNavBar>
  )
}

export default Header