import React from 'react'


//Styled components
import { 
    StyledContainer,
    Logo,
    StyledNavbarCollapse,
    StyledNav,
    StyledNavLink
  } from "./styles"

//Bootstrap
import {
    Container,
    Nav,
    Navbar,
} from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
      <StyledContainer>
        <Logo href="/" id='Logo'>Recanto</Logo>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <StyledNavbarCollapse id="responsive-navbar-nav" >
          <StyledNav>
            <StyledNavLink href="">Quem somos</StyledNavLink>
            <StyledNavLink href="#pricing">Cardápio</StyledNavLink>
            <StyledNavLink href="#pricing">Eventos</StyledNavLink>
            <StyledNavLink href="#pricing">Contatos</StyledNavLink>
          </StyledNav>
        </StyledNavbarCollapse>
      </StyledContainer>
    </Navbar>
  )
}

export default Header