import React, { useState } from 'react'

import { StyledHeader, Navbar } from './StyledHeader'

import recentroLogo from '../../assets/logorecentro.png'
import prefeituraLogo from '../../assets/logoprefeitura.jpg'
import Modal from '../modal/Modal'

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function handleIsModalOpen() {
    setIsModalOpen((state) => state ? false : true)
  }

  console.log(isModalOpen)

  return (
    <>
      <StyledHeader>
        <Navbar>
          <a href="https://recentro.recife.pe.gov.br/">
            <img src={recentroLogo} alt="Logo da Recentro" />
          </a>
          <div>
            <button onClick={handleIsModalOpen}>Login</button>
            <a href="https://www2.recife.pe.gov.br/">
              <img src={prefeituraLogo} alt="Logo da Prefeitura" />
            </a>
          </div>
        </Navbar>
        {isModalOpen ? <Modal /> : false}
      </StyledHeader>
    </>


  )
}

export default Header
