import React from 'react'

import { StyledHeader, Navbar } from './StyledHeader'

import recentroLogo from '../assets/logorecentro.png'
import prefeituraLogo from '../assets/logoprefeitura.jpg'

function Header() {
  return (
    <>
      <StyledHeader>
        <Navbar>
          <a href="https://recentro.recife.pe.gov.br/">
            <img src={recentroLogo} alt="Logo da Recentro" />
          </a>
          <a href="https://www2.recife.pe.gov.br/">
            <img src={prefeituraLogo} alt="Logo da Prefeitura" />
          </a>
        </Navbar>
      </StyledHeader>
    </>


  )
}

export default Header
