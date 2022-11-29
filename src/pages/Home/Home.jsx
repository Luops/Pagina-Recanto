import React from 'react'

//Components

//Styled components
import { 
  Container,
  SecaoLogo,
  Imagem,
  ContainerImagem,
  ContainerSaiba
} from "./styles.js"

//Imagens
import Logo from '../../img/logo.png'

const Home = () => {
  return (
    <Container>
      {/* Seção que vai conter logo, background e slogan */}
      <SecaoLogo>
        <ContainerImagem>
          <Imagem src={Logo} alt="Logo-Recanto" />
        </ContainerImagem>
        <ContainerSaiba>
          <h2 className='text-white fs-1'>Saiba mais</h2>
        </ContainerSaiba>
      </SecaoLogo>

    </Container>
  )
}

export default Home
