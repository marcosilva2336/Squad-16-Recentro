import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Admin from './pages/Admin';
import AtualizarImovel from './pages/Atualizar-Imovel'; 
import AdicionarImovel from './pages/Adicionar-Imovel';

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/atualizar-imovel' element={<AtualizarImovel />} /> 
        <Route path='/adicionar-imovel' element={<AdicionarImovel />} /> 
      </Routes>
    </Router>
  );
}

export default Rotas;
