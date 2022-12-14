import React, {useState} from 'react'


//Styled components
import { 
    StyledContainer,
    Logo,
    StyledNavbarCollapse,
    StyledNav,
    StyledNavLink,
    StyledNavBar,
    Imagem
  } from "./styles"

//Bootstrap
import {
    Container,
    Nav,
    Navbar,
} from 'react-bootstrap';

//Imagens
import LogoPreto from '../../img/LogoCasaPreto.png'
import LogoBranco from '../../img/LogoCasaBranco.png'


const Header = () => {
  const [navBar, setNavBar] = useState(false);

  const changeBackground = () => {
    if(window.scrollY >= 80) {
      setNavBar(true) 
    } else {
      setNavBar(false)
    }

  }
  window.addEventListener('scroll', changeBackground)

  return (
    <StyledNavBar collapseOnSelect expand="lg" bg={navBar ? "white" : "transparent"} variant="white">
      <StyledContainer>
        <Logo href="/" id='Logo'>
          <Imagem src={LogoPreto} alt="" />
        </Logo>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <StyledNavbarCollapse id="responsive-navbar-nav" >
          <StyledNav>
            <StyledNavLink href="/quemsomos">Quem somos</StyledNavLink>
            <StyledNavLink href="/cardapio">Cardápio</StyledNavLink>
            <StyledNavLink href="/eventos">Eventos</StyledNavLink>
            <StyledNavLink href="/contatos">Contatos</StyledNavLink>
          </StyledNav>
        </StyledNavbarCollapse>
      </StyledContainer>
    </StyledNavBar>
  )
}

export default Header