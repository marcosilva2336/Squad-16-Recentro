import React from 'react'
import { StyledBarraPesquisa } from './StyledBarraPesquisa'

function BarraPesquisa() {
  return (

    <>
      <StyledBarraPesquisa>
        <div className="search">
          <input type="text" name="text" placeholder="Pesquisar..." className="input"/>
        </div>
      </StyledBarraPesquisa>
    </>
  )
}

export default BarraPesquisa