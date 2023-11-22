import React from 'react'
import { StyledBoxMap } from './StyledBoxMap'
import { useState } from 'react'
import MapC from '../map/Map'
import BarraPesquisa from '../barra-pesquisa/BarraPesquisa'
import CheckBox from '../checkBox/CheckBox'


function BoxMap() {
  const [isVisible, setIsVisible] = useState(true)
  const initialState = {
    disponiveis: false,
    ocupados: false,
    emObras: false,
    abandonados: false,
    cowork: false,
    recifeAntigo: false,
    santoAmaro: false,
    saoJose: false,
    // Adicione mais estados conforme necessário
  }

  const [checkboxStates, setCheckboxStates] = useState(initialState)

  const handleCheckboxChange = (nome) => {
    setCheckboxStates({
      ...checkboxStates,
      [nome]: !checkboxStates[nome],
    })
  }


  return (
    <>
      <StyledBoxMap>
        <div className='container'>
          <div className='boxPesquisa'>
            <BarraPesquisa></BarraPesquisa>
          </div>
          <MapC></MapC>
          <div className='menuP'>
            <h1>Filtros</h1>
            <button id='buttonMenu' onClick={() => setIsVisible(!isVisible)}>
              <span className='material-symbols-outlined'>
                expand_more
              </span>
            </button>
          </div>

          <div className={isVisible ? 'sumir' : 'menu'}>

            <div className='container-check'>
              {/* Usando o componente CheckBox separado */}
              <CheckBox
                nome='disponiveis'
                status='Disponíveis'
                isChecked={checkboxStates['disponiveis']}
                onChange={handleCheckboxChange}
              />
              <CheckBox
                nome='ocupados'
                status='Ocupados'
                isChecked={checkboxStates['ocupados']}
                onChange={handleCheckboxChange}
              />
              <CheckBox
                nome='emObras'
                status='Em Obras'
                isChecked={checkboxStates['emObras']}
                onChange={handleCheckboxChange}
              />
              <CheckBox
                nome='abandonados'
                status='Abandonados'
                isChecked={checkboxStates['abandonados']}
                onChange={handleCheckboxChange}
              />
              <CheckBox
                nome='coWork'
                status='CoWork'
                isChecked={checkboxStates['coWork']}
                onChange={handleCheckboxChange}
              />
              <CheckBox
                nome='recifeAntigo'
                status='Recife Antigo'
                isChecked={checkboxStates['recifeAntigo']}
                onChange={handleCheckboxChange}
              />
              <CheckBox
                nome='santoAmaro'
                status='Santo Amaro'
                isChecked={checkboxStates['santoAmaro']}
                onChange={handleCheckboxChange}
              />
              <CheckBox
                nome='saoJose'
                status='São José'
                isChecked={checkboxStates['saoJose']}
                onChange={handleCheckboxChange}
              />
              {/* Adicione os demais checkboxes com suas propriedades */}
            </div>
          </div>
        </div>
      </StyledBoxMap>
    </>
  )
}

export default BoxMap