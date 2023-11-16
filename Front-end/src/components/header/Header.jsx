import React, { useState } from 'react'

import { StyledHeader, Navbar } from './StyledHeader'

import Modal from '../modal/Modal'

import recentroLogo from '../../assets/logorecentro.png'
import prefeituraLogo from '../../assets/logoprefeitura.jpg'



function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function handleOpenModal() {
    setIsModalOpen((state) => state ? false : true)
  }

  console.log(isModalOpen)

  return (
    <StyledHeader>
      <Navbar>
        <a href="https://recentro.recife.pe.gov.br/">
          <img className='Logo-recentro' src={recentroLogo} alt="Logo da Recentro" />
        </a>
        <div>
          <button onClick={handleOpenModal}>
            <span className="material-symbols-outlined">
            person
            </span>
            Login
          </button>
          <a href="https://www2.recife.pe.gov.br/">
            <img  className='Logo-Prefeitura' src={prefeituraLogo} alt="Logo da Prefeitura" />
          </a>
        </div>
      </Navbar>
      {isModalOpen && (
        <Modal onCloseModal={handleOpenModal} />
      )}
    </StyledHeader>
  )
}

export default Header
