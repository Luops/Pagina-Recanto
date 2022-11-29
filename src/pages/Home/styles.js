import styled from "styled-components";

import { 
  } from 'react-bootstrap';

//Imagens
import Background from '../../img/background.png'


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const SecaoLogo = styled.section`
  background: rgba(0,0,0,0.5) url(${Background});
  background-blend-mode: darken;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 50px 10px;
`

export const ContainerImagem = styled.div`
  width: 100%;
  display: flex;
`

export const ContainerSaiba = styled.div`
  width: 100%;
`

export const Imagem = styled.img`
  height: 10rem;
  width: auto;
`