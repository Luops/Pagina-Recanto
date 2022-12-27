import styled from "styled-components";

import { NavLink } from "react-router-dom";
import {Link} from 'react-scroll'

//Imagens
import LogoPreto from '../../img/LogoCasaPreto.png'
import LogoBranco from '../../img/LogoCasaBranco.png'

import { 
    Container, 
    Nav, 
    Navbar, 
    NavDropdown,
    Form,
  } from 'react-bootstrap';

export const StyledNavBar = styled(Navbar)`
  //-webkit-box-shadow: 0px 1px 15px 0px rgba(0,0,0,0.68); 
  //box-shadow: 0px 1px 15px 0px rgba(0,0,0,0.68);
  position: fixed;
  width: 100%;
  z-index: 2;
`

export const Logo = styled.a`
  font-size: 1.7em;
  font-family: fantasy;
  color: rgb(243,178,25);
  text-shadow: 1px 1px 0 #7A7A7A;
  text-decoration: none;
  transition: .4s ease-in-out;
  &:hover {
    color: black;
  }
`

export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const StyledNavbarCollapse = styled(Navbar.Collapse)`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 991px) {
    justify-content: center;
  }
`

export const StyledNav = styled(Nav)`
gap: 15px;
`

export const StyledNavLink = styled(Link)`
  color: black;
  transition: .2s ease-in-out;
  text-decoration: none;
  cursor: pointer;
  @media (max-width: 991px) {
    width: 30rem;
    &:nth-child(2):hover {
    background: #111;
    color: white;
    border-radius: 2px;
    }

    &:nth-child(3):hover {
    background: #111;
    color: white;
    border-radius: 2px;
    }

    &:nth-child(1):hover {
    background: #111;
    color: white;
    border-radius: 2px;
    }

    &:nth-child(4):hover {
    background: #111;
    color: white;
    border-radius: 2px;
    }
  }
  &:hover{
    color: black;
  }
`

export const Imagem = styled.img`
  height: 30px;
  width: auto;
`