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

//Components
import Header from './components/Header/Header';

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
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
