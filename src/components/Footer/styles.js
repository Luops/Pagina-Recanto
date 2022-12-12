import styled from "styled-components";

//Imagens
import Background from '../../img/background.png'

export const Container = styled.div`
    width: 100%;
    background: rgba(0,0,0,0.5) url(${Background});
    background-blend-mode: darken;
    background-size: cover;
    background-position: center;
    display: flex;
`
export const DivRestaurante = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 55%;
    padding: 5em 1.5em;
    gap: 50px;
`

export const DivForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    padding: 0.2em 0.5em;
`

export const ImgLogo = styled.img`
    width: 200px;
`

export const TxtFooter = styled.p`
    color: white;
    text-align: justify;
`

export const Localizacao = styled.address`
    color: white;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
`

