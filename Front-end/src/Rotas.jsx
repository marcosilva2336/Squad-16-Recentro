import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import AtualizarImovel from './pages/Atualizar-Imovel'; 
import AdicionarImovel from './pages/Adicionar-Imovel';
import LoggedUser from './pages/LoggedUser';

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/loggeduser' element={<LoggedUser />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/atualizar-imovel' element={<AtualizarImovel />} /> 
        <Route path='/adicionar-imovel' element={<AdicionarImovel />} /> 
      </Routes>
    </Router>
  );
}

export default Rotas;
