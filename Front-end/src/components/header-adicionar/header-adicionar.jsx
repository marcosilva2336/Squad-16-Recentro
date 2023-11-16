import React from 'react';
import { Header, HeaderImage, Title } from './StyledHeader-adicionar';
import recentroLogo from '../../assets/Logo_Recentro-removebg.png';
import prefeituraLogo from '../../assets/logoprefeitura.jpg';

const AdicionarImovelHeader = () => {
  return (
    <Header>
      <HeaderImage src={recentroLogo} alt="Logo-Recentro" />
      <Title>Adicionar imóvel</Title>
      <HeaderImage src={prefeituraLogo} alt="Logo-Prefeitura" right />
    </Header>
  );
};

export default AdicionarImovelHeader;
