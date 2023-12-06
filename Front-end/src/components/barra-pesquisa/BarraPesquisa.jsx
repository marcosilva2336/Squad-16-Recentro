import React from 'react'
import { StyledBarraPesquisa } from './StyledBarraPesquisa'

function BarraPesquisa({ handleSearchBarInput }) {
  return (

    <>
      <StyledBarraPesquisa>
        <div className="search">
          <input type="text" name="text" placeholder="Pesquisar..." className="input" onChange={(e) => handleSearchBarInput(e)}/>
        </div>
      </StyledBarraPesquisa>
    </>
  )
}

export default BarraPesquisa
