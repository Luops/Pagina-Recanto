import styled from "styled-components";

import { NavLink } from "react-router-dom";

import { 
    Container, 
    Nav, 
    Navbar, 
    NavDropdown,
    Form,
  } from 'react-bootstrap';

export const StyledNavBar = styled(Navbar)`
  -webkit-box-shadow: 0px 1px 15px 0px rgba(0,0,0,0.68); 
  box-shadow: 0px 1px 15px 0px rgba(0,0,0,0.68);
  position: fixed;
  width: 100%;
`

export const Logo = styled.a`
  font-size: 1.7em;
  font-family: fantasy;
  color: rgba(220,95,59,1);
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
`

export const StyledNavLink = styled(Nav.Link)`
  color: black;
  
`