import React from 'react';
import { Header, HeaderImage, Title } from './StyledHeader-atualizar';
import recentroLogo from '../../assets/Logo_Recentro-removebg.png';
import prefeituraLogo from '../../assets/logoprefeitura.jpg';

const AtualizarImovelHeader = () => {
  return (
    <Header>
      <HeaderImage src={recentroLogo} alt="Logo-Recentro" />
      <Title>Atualizar imóvel</Title>
      <HeaderImage src={prefeituraLogo} alt="Logo-Prefeitura" right />
    </Header>
  );
};

export default AtualizarImovelHeader;
