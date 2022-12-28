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
  @media (max-width: 780px) {
    flex-direction: column-reverse; 
  }
  @media (min-width: 1440px) {
  }
`

export const Eventos = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 15px;
  text-align: justify;
  @media (max-width: 780px) {
    width: 100%;
  } 
`

export const ImagemEventos = styled.img`
  border: none;
  background-size: cover;
  background-position: center;
  height: 380px;
  width: 45%;
  border-radius: 0px 10px 10px 0px;
  
  @media (max-width: 780px) {
    width: 100%;
    border-radius: 10px 10px 0px 0px;
    height: 380px;
  }
`

export const TxtProximo = styled.h3`
  font-size: 1.2em;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  @media (max-width: 780px) {
    font-size: 1.8em;
  }
  @media (max-width: 450px) {
    font-size: 1.5rem;
  }
`

export const TxtNome = styled.h3`
  font-size: 2em;
  font-weight: bold;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  @media (max-width: 780px) {
    font-size: 3.0rem;
  }
  @media (max-width: 550px) {
    font-size: 2.6rem;
  }
  @media (max-width: 450px) {
    font-size: 2.2rem;
  }
  @media (max-width: 380px) {
    font-size: 1.8rem;
  }
`

export const TxtEvento = styled.p`
  font-size: 1em;
  @media (max-width: 1100px) {
    font-size: .85em; 
  }
  @media (max-width: 940px) {
    font-size: .75em; 
  }
  @media (max-width: 780px) {
    font-size: 1em;
  }
  @media (max-width: 380px) {
    font-size: .75em;
  }
`