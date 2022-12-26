import axios from "axios"

import React, { useRef, useState, useEffect } from 'react'

import { NavLink } from 'react-router-dom'

//Styled components
import {
    Container,
    Component,
    Eventos,
    ImagemEventos,
    TxtProximo,
    TxtNome,
    TxtEvento
  } from "./styles"

//Dados
import { productsHome, events } from '../../data/datas.js'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import {Pagination } from "swiper";

const SlideEventos = () => {

  const [eventsAPI, setEventsAPI] = useState([])

  const getEvents = async() => {
    
    try {
      const response = await axios.get("") //Colocar o site da API aqui
      
      const data = response.data;
      setEventsAPI(data)
    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    getEvents();
  }, [])


  return (
    <Container>
        <Swiper
        style={{
            "--swiper-navigation-color": "black",
            "--swiper-navigation-size": "45px",
          }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper">
            {events && events.map((Event) => (
                <SwiperSlide>
                    <Component>
                       <Eventos>
                        <TxtProximo>Evento</TxtProximo>
                        <TxtNome>{Event.title}</TxtNome>
                        <TxtEvento>{Event.text}</TxtEvento>
                        
                        <div className='d-flex'>
                          <p className='fw-bold'>Data:</p>&nbsp;<p>{Event.date} às {Event.hour}h{Event.minutes}min</p>
                        </div>
                      </Eventos>
                      <ImagemEventos src={Event.image} alt={Event.title}/>
                    </Component>
                </SwiperSlide>
            ))}
            
        </Swiper>
    </Container>
  )
}

export default SlideEventos