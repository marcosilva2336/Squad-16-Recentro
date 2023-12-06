import React from 'react'
import { StyledBoxMap } from './StyledBoxMap'
import { useState } from 'react'
import LoggedMapC from '../map/LoggedMap'
import BarraPesquisa from '../barra-pesquisa/BarraPesquisa'
import CheckBox from '../checkBox/CheckBox'



function LoggedBoxMap() {

  const [isVisible, setIsVisible] = useState(true)

  return (

    <>
      <StyledBoxMap>

        <div className='container'>
          <div className='boxPesquisa'>
            <BarraPesquisa></BarraPesquisa>
          </div>
          <LoggedMapC>
          </LoggedMapC>
          <div className='menuP' >
            <h1>Filtros</h1>
            <button id='buttonMenu' onClick={() => setIsVisible(!isVisible)}>
              <span className="material-symbols-outlined">
                  expand_more
              </span>
            </button>
          </div>

          <div className={isVisible ? 'sumir' : 'menu'}>

            <div className='container-check'>
              <CheckBox nome='um' status='Disponiveis'></CheckBox>
              <CheckBox nome='dois' status='Ocupados'></CheckBox>
              <CheckBox nome='tres' status='Em Obras'></CheckBox>
              <CheckBox nome='quatro' status='Abandonados'></CheckBox>
              <CheckBox nome='sete' status='CoWork'></CheckBox>
              <CheckBox nome='oito' status='Recife Antigo'></CheckBox>
              <CheckBox nome='nove' status='Santo Amaro'></CheckBox>
              <CheckBox nome='dez' status='São José'></CheckBox>
            </div>
          </div>

        </div>

      </StyledBoxMap>

    </>

  )
}

export default LoggedBoxMap
