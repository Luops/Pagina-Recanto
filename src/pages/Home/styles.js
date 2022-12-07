import styled from "styled-components";

import { 
  } from 'react-bootstrap';

//Imagens
import Background from '../../img/background.png'


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #E5E0DA;
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

export const TituloSaiba = styled.h2`
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`

export const Imagem = styled.img`
  height: 10rem;
  width: auto;
`

export const SecaoHistoria = styled.section`
  width: 100%;
  background-color: #111111;
  color: white;
  padding: 80px 10%;
  display: flex;
  flex-direction: column;
  gap: 50px;
`

export const TituloHistoria = styled.h2`
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`

export const SecaoProduto = styled.section`
  width: 100%;
  padding: 80px 10%;
`

export const TituloProdutos = styled.h2`
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif
`

export const SecaoEvento = styled.section`
  width: 95%;
  display: flex;
  min-height: 400px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 50px;
  -webkit-box-shadow: 5px 9px 32px 0px rgba(133,133,133,1);
  -moz-box-shadow: 5px 9px 32px 0px rgba(133,133,133,1);
  box-shadow: 5px 9px 32px 0px rgba(133,133,133,1);
`

export const Eventos = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 15px;
  text-align: justify; 
`

export const ImagemEventos = styled.img`
  border: none;
  background-size: cover;
  background-position: center;
`