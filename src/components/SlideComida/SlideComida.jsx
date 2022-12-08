import React from 'react'

import { NavLink } from 'react-router-dom'

//Styled components
import {
    Container,
    Component,
    Titulo,
    Imagem,
    Botao,
    StyledNavLink
  } from "./styles"

//Dados
import { productsHome } from '../../data/datas.js'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";

const SlideComida = () => {
  return (
    <Container>
        <Swiper
        style={{
            "--swiper-navigation-color": "black",
            "--swiper-navigation-size": "45px",
          }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper">
            {productsHome && productsHome.map((Products) => (
                <SwiperSlide>
                    <Component>
                        <Titulo key={Products.title} >{Products.title}</Titulo>
                        <Imagem src={Products.image} alt={Products.title} key={Products.title}/>
                        <StyledNavLink to="/" className="text-white">
                          <Botao>
                            Exibir Mais
                          </Botao>
                        </StyledNavLink>
                       
                    </Component>
                </SwiperSlide>
            ))}
            
        </Swiper>
    </Container>
  )
}

export default SlideComida