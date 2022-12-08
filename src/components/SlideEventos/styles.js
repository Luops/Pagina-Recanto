import styled from "styled-components";

import { NavLink } from 'react-router-dom'

//Imagens'

import { 
  } from 'react-bootstrap';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Component = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`


export const Eventos = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 15px;
  text-align: justify; 
`

export const ImagemEventos = styled.img`
  border: none;
  background-size: cover;
  background-position: center;
  max-height: 380px;
  width: 45%;
  border-radius: 0px 10px 10px 0px;
`

export const TxtProximo = styled.h3`
  font-size: 1.2em;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif
`

export const TxtNome = styled.h3`
  font-size: 2em;
  font-weight: bold;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif
`