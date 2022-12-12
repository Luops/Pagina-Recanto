import React from 'react';

import { 
  BrowserRouter, 
  Routes, 
  Route,
  Router, 
  Navigate
} from 'react-router-dom'


//CSS
import './App.css';

//Páginas
import Home from './pages/Home/Home';
import QuemSomos from './pages/QuemSomos/QuemSomos'
import Cardapio from './pages/Cardapio/Cardapio'
import Eventos from './pages/Eventos/Eventos'
import Contatos from './pages/Contatos/Contatos'

//Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <div>
          <Routes>
            <Route path="/" element={ <Home/>} />
            <Route path="/quemsomos" element={ <QuemSomos/>} />
            <Route path="/cardapio" element={ <Cardapio/>} />
            <Route path="/eventos" element={ <Eventos/>} />
            <Route path="/contatos" element={ <Contatos/>} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
