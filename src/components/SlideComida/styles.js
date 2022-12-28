import styled from "styled-components";

import { NavLink } from 'react-router-dom'

//Imagens'

import { 
  } from 'react-bootstrap';

export const Container = styled.div`
  width: 100%;
  padding: 0px 15%;
  @media (max-width: 730px) {
    padding: 0px 0px;
  }
`

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  z-index: 0;
  gap: 20px;
  width: 100%;
  
`

export const Titulo = styled.h2`
  color: gray;
  font-weight: 400;
  font-family: "Kaushan Script" ;
`

export const Imagem = styled.img`
  height: 250px;
  @media (min-width: 1440px) {
    height: 350px;
  }
`

export const Botao = styled.button`
  background-color: #292929;
  border: 1px solid #292929;
  padding: 16px 32px 16px 32px;
  transition: .4s ease-in-out;
  color: white;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  letter-spacing: 2px;
  &:hover{
    background-color: #E5E0DA;
    color: #292929;
  }
`
export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  list-style: none;
  transition: .4s ease-in-out;
  &:hover{
    transform: scale(1.01);
  }
`