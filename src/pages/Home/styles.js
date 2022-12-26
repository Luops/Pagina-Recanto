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

export const SecaoLogo2 = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  @media (max-width: 869px) {
    flex-direction: column;
    margin: 50px 0;
  }
`

export const Lanchonete = styled.div`
  width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding-left: 15%;
  > h3 {
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 5.5em;
    color: #414141;
    text-shadow: 4px 3px 0 rgba(138,138,138,0.65);
    width: 100%;
    margin-block-end: 0 !important;
    margin-block-start: 0 !important;
    align-self: flex-start;
    text-align: start;
  }
  > p {
    width: 80%;
    font-size: 1.1em;
    align-self: flex-start;
    text-align: start;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: #414141;
    text-shadow: 2px 1px 0 rgba(138,138,138,0.65);
    letter-spacing: 1.5px;
  }
  > div {
    height: 50px;
    width: 80%;
    align-self: flex-end;
    text-align: start;
    align-self: flex-start;
    text-align: start;
  }

  > div > button {
    border: none;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: white;
    letter-spacing: 1.5px;
    padding: 5px 25px;
    background: rgb(226,74,27);
    background: -moz-linear-gradient(0deg, rgba(226,74,27,1) 0%, rgba(229,136,4,1) 100%);
    background: -webkit-linear-gradient(0deg, rgba(226,74,27,1) 0%, rgba(229,136,4,1) 100%);
    background: linear-gradient(0deg, rgba(226,74,27,1) 0%, rgba(229,136,4,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#e24a1b",endColorstr="#e58804",GradientType=1);
    transition: .4s ease-in-out;
    &:hover {
      transform: scale(1.01);
      border: 1px solid gray;
      box-shadow: 3px 2px 0 rgba(138,138,138,0.65);
    }
  }
  @media (min-width: 1440px) {
    > h3 {
      font-size: 7.5em;
    }
  }
  @media (max-width: 1146px) {
    margin-bottom: 150px;
    > h3 {
      width: 700px;
    }
  }
  @media (max-width: 869px) {
    width: 100%;
    margin-top: 8%;
    align-items: flex-start;
    justify-content: flex-start;
    > h3 {
      margin-block-end: 0 !important;
      margin-block-start: 0 !important;
      width: 100%;
    }
  }
  @media (max-width: 710px) {
    padding-left: 8%;
    > h3 {
      font-size: 3.8em;
    }
  }
  @media (max-width: 550px) {
    padding-left: 8%;
    > h3 {
      font-size: 3em;
    }
    > p {
      font-size: .85em;
    }
  }
  @media (max-width: 400px) {
    padding-left: 6%;
    > h3 {
      font-size: 2.8em;
    }
    > p {
      font-size: .75em;
    }
  }
`

export const DivLanche = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-start;
  > img {
    width: 700px;
    margin-left: -400px;
    margin-bottom: 50px;
  }
  @media (max-width: 1146px) {
    > img {
    margin-left: -550px;
    }
  }
  @media (max-width: 1028px) {
    > img {
    margin-left: -600px;
    }
  }
  @media (max-width: 946px) {
    > img {
    margin-left: -650px;
    }
  }
  @media (max-width: 869px) {
    align-items: center !important;
    justify-content: center !important;
    text-align: center;
    > img {
      margin-left: 0px;
      margin-top: -320px;
    }
  }
  @media (max-width: 825px) {
    > img {
      width: 140%;
    }
  }
  @media (max-width: 550px) {
    > img {
      margin-top: -250px;
    }
  }
  @media (max-width: 400px) {
    > img {
      width: 180%;
    }
  }
  
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
  padding: 150px 10%;
  display: flex;
  flex-direction: column;
  gap: 50px;

  > div > p {
    text-align: justify;
  }
`

export const TituloHistoria = styled.h2`
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`

export const SecaoProduto = styled.section`
  width: 100%;
  padding: 80px 0%;
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
