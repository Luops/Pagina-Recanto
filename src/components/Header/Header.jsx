import React, {useState, useRef} from 'react'
import {Link} from 'react-scroll'


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
  const [toggleBtnHamburger, setToggleBtnHamburger] = useState(false)

  const changeBackground = () => {
    if(window.scrollY >= 80) {
      setNavBar(true) 
    } else {
      setNavBar(false)
    }
  }
  window.addEventListener('scroll', changeBackground)

  return (
    <StyledNavBar collapseOnSelect expand="lg" bg={navBar ? "white" : "transparent" && toggleBtnHamburger ? "white" : "transparent"} variant="white">
      <StyledContainer>
        <Logo href="/" id='Logo'>
          <Imagem src={LogoPreto} alt="" />
        </Logo>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"  
        onClick={() => {
          setToggleBtnHamburger(!toggleBtnHamburger);
        }}/>
        <StyledNavbarCollapse id="responsive-navbar-nav">
          <StyledNav>
            <StyledNavLink to="quemsomos" spy={true} smooth={true} offset={50} duration={500}>Quem somos</StyledNavLink>
            <StyledNavLink to="cardapio" spy={true} smooth={true} offset={50} duration={500}>Cardápio</StyledNavLink>
            <StyledNavLink to="eventos" spy={true} smooth={true} offset={50} duration={500}>Eventos</StyledNavLink>
            <StyledNavLink to="contatos" spy={true} smooth={true} offset={50} duration={500}>Contatos</StyledNavLink>
          </StyledNav>
        </StyledNavbarCollapse>
      </StyledContainer>
    </StyledNavBar>
  )
}

export default Header