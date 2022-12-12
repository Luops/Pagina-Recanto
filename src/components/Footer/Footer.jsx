import React from 'react'

//Icons
import { FaMapMarkerAlt } from "react-icons/fa";

//Styled components
import {
    Container,
    DivRestaurante,
    DivForm,
    ImgLogo,
    TxtFooter,
    Localizacao,

  } from "./styles"

//Imagens
import Logo from '../../img/LogoCasaBranco.png'

const Footer = () => {
    const address = [
        {name: 'address', icon: <FaMapMarkerAlt/>,}
    ]
  return (
    <Container>
        <DivRestaurante>
            <div className='d-flex align-items-center'>
                <ImgLogo src={Logo} alt="Logo restaurante" />
                <h3 className='text-white fs-1 fw-bold'>Nome Restaurante</h3>
            </div>
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

        </DivRestaurante>
        <DivForm>

        </DivForm>
    </Container>
  )
}

export default Footer