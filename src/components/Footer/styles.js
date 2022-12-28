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
    padding-top: 90px;
    @media (max-width: 920px) {
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
    }
`
export const DivRestaurante = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 55%;
    padding: 5em 1.5em;
    gap: 50px;
    @media (max-width: 920px) {
        width: 650px;
        padding: 5em 0em;
        align-items: center;
    }
    @media (max-width: 725px) {
        width: 500px;
        align-items: center;
    }
    @media (max-width: 574px) {
        width: 400px;
        align-items: center;
    }
    @media (max-width: 478px) {
        width: 320px;
        align-items: center;
    }
    @media (max-width: 372px) {
        width: 290px;
        align-items: center;
    }
`

export const DivLogo = styled.div`
    display: flex;
    @media (max-width: 575px) {
        flex-direction: column;
        gap: 15px;
    }
`

export const DivForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 45%;
    padding: 0.2em 0.5em;
    padding-top: 25px;
    @media (max-width: 920px) {
        width: 100%;
    }
    @media (max-width: 535px) {
        padding: 1em 1.5em;
        padding-top: 50px;
    }
`

export const ImgLogo = styled.img`
    width: 200px;
`

export const TxtFooter = styled.p`
    color: white;
    text-align: justify;
    width: 100%;
    font-size: 0.95em;
`

export const Localizacao = styled.address`
    color: white;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Copyright = styled.p`
    color: white;
    font-size: 0.8em;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    letter-spacing: 1px;
    margin-top: 20px;
`

export const Redes = styled.div`
    display: flex;
    margin-left: 15px;
    gap: 5px;
    text-decoration: none;
`

export const Formulario = styled.form`
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 85%;
    background-color: white;
    padding: 15px;
    border-radius: 5px;
    @media (max-width: 1100px) {
        width: 100%;
    }
    @media (max-width: 920px) {
        width: 500px;
    }
    @media (max-width: 535px) {
        width: 100%;
    }
`
export const DivContato = styled.div`
    width: 100%; 
    padding-top: 15px;
`

export const TxtContato = styled.h3`
    color: #616161;
    text-shadow: #e0e0e0 2px 2px 0;
    font-weight: bold;
    letter-spacing: 1px;
`

export const DivNomeCel = styled.div`
    display: flex;
    gap: 10px;
    width: 100%;
`

export const LabelNome = styled.label`
    width: 50%;
    > input {
        width: 100%;
        border: none;
        border-radius: 5px;
        padding: 5px 0;
        border: 2px solid #ccc;
        -webkit-box-shadow: 0px 0px 15px -2px rgba(0,0,0,0.5); 
        box-shadow: 0px 0px 15px -2px rgba(0,0,0,0.5);
        padding-left: 10px;
    }
    > input:focus {
        outline: 0;
    }
    > input::placeholder {
        color: gray;
        font-weight: bold;
    }
`

export const LabelCelular = styled.label`
    width: 50%;
    > input {
        width: 100%;
        border: none;
        border-radius: 5px;
        padding: 5px 0;
        border: 2px solid #ccc;
        -webkit-box-shadow: 0px 0px 15px -2px rgba(0,0,0,0.5); 
        box-shadow: 0px 0px 15px -2px rgba(0,0,0,0.5);
        padding-left: 10px;
    }
    > input:focus {
        outline: 0;
    }
    > input::placeholder {
        color: gray;
        font-weight: bold;
    }
`

export const LabelEmail = styled.label`
    width: 100%;
    > input {
        width: 100%;
        border: none;
        border-radius: 5px;
        padding: 5px 0;
        border: 2px solid #ccc;
        -webkit-box-shadow: 0px 0px 15px -2px rgba(0,0,0,0.5); 
        box-shadow: 0px 0px 15px -2px rgba(0,0,0,0.5);
        padding-left: 10px;
    }
    > input:focus {
        outline: 0;
    }
    > input::placeholder {
        color: gray;
        font-weight: bold;
    }
`

export const LabelTexto = styled.label`
    width: 100%;
    font-weight: bold;
    letter-spacing: 2px;
    > textarea {
        width: 100%;
        border-radius: 5px;
        border: 2px solid #ccc;
        -webkit-box-shadow: 0px 0px 15px -2px rgba(0,0,0,0.5); 
        box-shadow: 0px 0px 15px -2px rgba(0,0,0,0.5);
        padding-left: 10px;
    }
    > textarea:focus {
        outline: 0;
    }
    > textarea::placeholder {
        color: gray;
        font-weight: bold;
        letter-spacing: 2px;
    }
`

export const Botao = styled.button`
    font-size: 1.25em;
    font-weight: bold;
    padding: 10px;
    border-radius: 5px;
    border: 2px solid #ccc;
    background: rgb(255,255,255);
    background: -moz-linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(185,185,185,1) 100%);
    background: -webkit-linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(185,185,185,1) 100%);
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(185,185,185,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#b9b9b9",GradientType=1);
    transition: .4s ease-in-out;
    &:hover{
        transform: scale(1.01);
        color: white;
        background: rgb(77,77,77);
        background: -moz-linear-gradient(5deg, rgba(77,77,77,1) 0%, rgba(0,0,0,1) 100%);
        background: -webkit-linear-gradient(5deg, rgba(77,77,77,1) 0%, rgba(0,0,0,1) 100%);
        background: linear-gradient(5deg, rgba(77,77,77,1) 0%, rgba(0,0,0,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#4d4d4d",endColorstr="#000000",GradientType=1);
    }

`
