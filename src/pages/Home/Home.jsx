import React from 'react'

//Components
import SlideComida from '../../components/SlideComida/SlideComida.jsx'

//Styled components
import { 
  Container,
  SecaoLogo,
  Imagem,
  ContainerImagem,
  ContainerSaiba,
  SecaoHistoria,
  SecaoProduto
} from "./styles.js"

//Imagens
import Logo from '../../img/logo.png'

//Dados

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
      <SecaoHistoria>
          <h2>Nossa História</h2>
          <div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id nisi beatae ipsum alias tempore, 
              blanditiis, velit modi, enim dolore voluptates quidem ipsam vitae quia nam quo repudiandae 
              nostrum deserunt nobis aliquid ad officia rerum temporibus consequatur delectus! Voluptatibus 
              corporis aliquam quae eaque rerum minus natus repellat, incidunt quaerat iste optio vel
              accusamus hic officiis nemo aspernatur. Quos, dolore dolorum modi, delectus est consequatur 
              culpa harum provident facere in fugit. Numquam, ratione aspernatur. Sed, eligendi, quisquam 
              cum aliquam iusto veritatis consectetur, quasi libero minus vel cupiditate doloribus quam aut 
              nihil omnis repellat delectus. Rerum eius, ut illo vel quod voluptatum eligendi.
            </p>
          </div>
      </SecaoHistoria>
      <SecaoProduto>
        <h2>Nossos Produtos</h2>
        {/*Slide com os principais produtos */}
        <SlideComida/>
        
        
      </SecaoProduto>

    </Container>
  )
}

export default Home
