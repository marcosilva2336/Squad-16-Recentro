import React, { useState } from 'react'

import { StyledHeader, Navbar } from './StyledHeader'

import recentroLogo from '../../assets/logorecentro.png'
import prefeituraLogo from '../../assets/logoprefeitura.jpg'



function LoggedHeader() {
  

  return (
    <StyledHeader>
      <Navbar>
        <a href="https://recentro.recife.pe.gov.br/">
          <img className='Logo-recentro' src={recentroLogo} alt="Logo da Recentro" />
        </a>
        <div>
          <a href="https://www2.recife.pe.gov.br/">
            <img  className='Logo-Prefeitura' src={prefeituraLogo} alt="Logo da Prefeitura" />
          </a>
        </div>
      </Navbar>
      
    </StyledHeader>
  )
}

export default LoggedHeader
