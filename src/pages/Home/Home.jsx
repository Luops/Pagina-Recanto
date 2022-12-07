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
  TituloSaiba,
  SecaoHistoria,
  TituloHistoria,
  SecaoProduto,
  TituloProdutos,
  SecaoEvento,
  Eventos,
  ImagemEventos
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
          <TituloSaiba className='text-white fs-1'>Saiba mais</TituloSaiba>
        </ContainerSaiba>
      </SecaoLogo>
      {/* Seção que vai conter somente a história do estabelecimento*/}
      <SecaoHistoria>
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
      <SecaoProduto>
        <TituloProdutos>Escolha algum produto</TituloProdutos>
        {/*Slide com os principais produtos */}
        <SlideComida/>
        
        
      </SecaoProduto>
      {/* Seção que vai conter os eventos*/}
      <SecaoEvento>
          <Eventos>
            <h3>Próximos Eventos</h3>
            <h3>Nome do evento</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae mollitia suscipit quisquam, 
              iure sint assumenda ea sequi voluptates molestias accusantium doloremque dolorem, provident 
              eum fugit, alias harum incidunt facere quas. Suscipit tempora, inventore labore natus doloribus
               asperiores reiciendis consequatur. Consectetur dicta a eum ad temporibus voluptatum beatae 
               commodi laboriosam quaerat eaque aperiam impedit quis autem eos numquam rerum nam modi, velit 
               in corrupti possimus cupiditate culpa. Natus unde, optio dolorem veritatis cum assumenda esse 
               id dolorum non cupiditate tempora temporibus harum est reiciendis facere veniam explicabo 
               officia delectus dicta omnis suscipit! Sunt totam placeat pariatur ullam excepturi, aut 
               repellendus quos!
            </p>
          </Eventos>
          <ImagemEventos>
            {/*Imagem virá de uma API, e esta imagem foi inserida por um formulário*/}

          </ImagemEventos>
      </SecaoEvento>


    </Container>
  )
}

export default Home
