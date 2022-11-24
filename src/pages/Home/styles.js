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
  width: 100%;
  height: 100vh;
  background-image: url(${Background});
  background-size: cover;
  background-position: center;
`