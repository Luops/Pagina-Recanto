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
`

export const Lanchonete = styled.div`
  width: 50%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  > h3 {
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 5.5em;
    color: #414141;
    text-shadow: 4px 3px 0 rgba(138,138,138,0.65);
    width: 80%;
    align-self: flex-end;
    text-align: start;
  }
  > p {
    width: 80%;
    font-size: 1.1em;
    align-self: flex-end;
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
`

export const DivLanche = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-start;
  > img {
    width: 700px;
    margin-left: -200px;
    margin-bottom: 50px;
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
