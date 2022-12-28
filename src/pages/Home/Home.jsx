import React, {useRef} from 'react'

//Components
import SlideComida from '../../components/SlideComida/SlideComida.jsx'
import SlideEventos from '../../components/SlideEventos/SlideEventos.jsx'

//Styled components
import { 
  Container,
  SecaoLogo,
  Lanchonete,
  DivLanche,
  Imagem,
  ContainerImagem,
  ContainerSaiba,
  TituloSaiba,
  SecaoHistoria,
  TituloHistoria,
  SecaoProduto,
  TituloProdutos,
  SecaoEvento,
} from "./styles.js"

//Imagens
import Logo from '../../img/logo.png'
import Lanche from '../../img/Lanche.png'


const Home = () => {

  return (
    <Container>
      {/* Seção que vai conter logo, background e slogan */}
      <SecaoLogo>
        <Lanchonete>
          <h3>Restaurant Suit</h3>
          <p>Seja Bem-Vindo ao nosso site.</p>
          <p>Acesse nosso cardápio digital ou entre em contato conosco.</p>
          <div>
            <button>Cardápio</button>
          </div>
        </Lanchonete>
        <DivLanche>
          <img src={Lanche} alt="Lanche" />
        </DivLanche>
      </SecaoLogo>
      {/* Seção que vai conter somente a história do estabelecimento*/}
      <SecaoHistoria id='quemsomos'>
          <TituloHistoria>Nossa História</TituloHistoria>
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
      {/* Seção que vai conter somente os produtos genéricos para escolher e ir para a página*/}
      <SecaoProduto id="cardapio">
        <TituloProdutos>Escolha algum produto</TituloProdutos>
        {/*Slide com os principais produtos */}
        <SlideComida/>
        
        
      </SecaoProduto>
      {/* Seção que vai conter os eventos*/}
      <SecaoEvento id="eventos">
        <div>
          <SlideEventos/>
        </div>
      </SecaoEvento>
    </Container>
  )
}

export default Home
