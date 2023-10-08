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
          <img src={recentroLogo} alt="Logo da Recentro" />
        </a>
        <div>
          <button onClick={handleOpenModal}>Login</button>
          <a href="https://www2.recife.pe.gov.br/">
            <img src={prefeituraLogo} alt="Logo da Prefeitura" />
          </a>
        </div>
      </Navbar>
      {isModalOpen && (
        <Modal onCloseModal={handleOpenModal}>
          <h2>Conecte-se</h2>
          <form>
            <div className='inputContainer' >
              <label htmlFor="email">E-mail</label>
              <input
                type='text'
                name='email' 
                id='email'
              />
            </div>
            <div className='inputContainer' >
              <label htmlFor="password">Senha</label>
              <input
                type='password'
                name='password' 
                id='password'
              />
            </div>
            <button>Entrar</button>
          </form>
        </Modal>
      )}
    </StyledHeader>
  )
}

export default Header
