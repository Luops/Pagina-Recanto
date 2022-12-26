import React from 'react'

//Icons
import { 
    FaMapMarkerAlt,
    FaFacebook,
    FaInstagramSquare,
    FaWhatsappSquare 
} from "react-icons/fa";

import {
    IoLogoWhatsapp,
} from "react-icons/io"

import {
    AiFillInstagram
} from "react-icons/ai"



//Styled components
import {
    Container,
    DivRestaurante,
    DivForm,
    DivLogo,
    ImgLogo,
    TxtFooter,
    Localizacao,
    Copyright,
    Redes,
    DivContato,
    TxtContato,
    Formulario,
    DivNomeCel,
    LabelNome,
    LabelCelular,
    LabelEmail,
    LabelTexto,
    Botao
  } from "./styles"

//Imagens
import Logo from '../../img/LogoCasaBranco.png'

const Footer = () => {
    const address = [
        {name: 'address', icon: <FaMapMarkerAlt/>,}
    ]

    const redes = [
        {name: 'Facebook', icon: <FaFacebook/>, URL:""},
        {name: 'Instagram', icon: <AiFillInstagram/>, URL:""},
        {name: 'Wpp', icon: <IoLogoWhatsapp/>, URL:""},
    ]


  return (
    <Container>
        <DivRestaurante>
            <DivLogo className='d-flex align-items-center'>
                <ImgLogo src={Logo} alt="Logo restaurante" />
                <h3 className='text-white fs-1 fw-bold'>Restaurant Suit</h3>
            </DivLogo>
            <TxtFooter>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, pariatur? 
                Sequi distinctio fuga inventore corrupti? Tempora, magnam natus. Dolorum eligendi 
                quo in neque harum quis natus cum assumenda cupiditate reprehenderit minus doloremque, 
                ipsa similique dicta quibusdam quam, provident animi voluptatibus sequi dolor aperiam 
                voluptas tempore! Delectus nihil sapiente excepturi facere consectetur ipsum fugiat 
                blanditiis laudantium, nostrum mollitia enim consequatur vel itaque odio. Nisi quas 
                quidem aperiam obcaecati quae esse similique earum, reprehenderit animi. Molestias, natus.
            </TxtFooter>
            <Localizacao>
                {address.map((address) => (
                    <i className='fs-3'>{address.icon}</i>
                ))}
                <p className='d-flex pt-4 align-self-center'>
                    Inserir a localização aqui
                </p>
            </Localizacao>
            <div className='d-flex align-items-center'>
                <Copyright>
                    &copy;Restaurant Suit 2022. TODOS OS DIREITOS RESERVADOS.
                </Copyright>
                <Redes>
                    {redes.map((redes) => (
                        <a href={redes.URL} className="text-white">
                            <i className='fs-4'>
                                {redes.icon}
                            </i>
                        </a>
                    ))}
                </Redes>
            </div>
        </DivRestaurante>
        <DivForm>
            <Formulario action="" onSubmit="{}">
                <DivContato>
                    <TxtContato>Entre em contato</TxtContato>
                </DivContato>
                <DivNomeCel>
                    <LabelNome htmlFor="">
                        <input type="text" placeholder='NOME'/>
                    </LabelNome>
                    <LabelCelular htmlFor="">
                        <input type="text" placeholder='CELULAR'/>
                    </LabelCelular>
                </DivNomeCel>
                <LabelEmail htmlFor="">
                    <input type="email" placeholder='E-MAIL'/>
                </LabelEmail>
                <LabelTexto htmlFor="">
                    <textarea 
                    name="" 
                    id="" 
                    rows="10"
                    placeholder='Escreva aqui o que você deseja'
                    ></textarea>
                </LabelTexto>
                <Botao>Enviar</Botao>
            </Formulario>
        </DivForm>
    </Container>
  )
}

export default Footer