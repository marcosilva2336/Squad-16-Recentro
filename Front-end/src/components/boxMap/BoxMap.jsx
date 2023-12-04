import React from 'react'
import { StyledBoxMap } from './StyledBoxMap'
import { useState, useEffect } from 'react'
import MapC from '../map/Map'
import BarraPesquisa from '../barra-pesquisa/BarraPesquisa'
import CheckBox from '../checkBox/CheckBox'
import axios from 'axios'

function BoxMap() {
  const [isVisible, setIsVisible] = useState(true)

  const checkboxValues = [
    'disponiveis',
    'ocupados',
    'emObras',
    'abandonados',
    'cowork',
    'recifeAntigo',
    'santoAmaro',
    'saoJose',
  ]
  const [checkboxState, setCheckboxState] = useState([])
  const [fetchProperties, setFetchProperties] = useState([])

  function handleCheckboxChange(checkboxValue) {
    if (!checkboxState.includes(checkboxValue))  {
      setCheckboxState([...checkboxState, checkboxValue])
    }

    if (checkboxState.includes(checkboxValue)) {
      setCheckboxState(checkboxState.filter(checkbox => checkbox !== checkboxValue))
    }
  }

  const fetchDataFromBackend = async () => {
    const response = await axios.get('http://localhost:8080/imovel/checkbox-filter', {
      params: {
        available: checkboxState.includes('disponiveis') ? 'disponivel' : 'doesnt exist',
        occupied: checkboxState.includes('ocupado') ? 'disponivel' : 'doesnt exist',
        atConstruction: checkboxState.includes('emObra') ? 'em obra' : 'doesnt exist',
        abandoned: checkboxState.includes('abandonados') ? 'abandonas' : 'doesnt exist',
        cowork: checkboxState.includes('cowork') ? 'cowork' : 'doesnt exist',
        recifeAntigo: checkboxState.includes('recifeAntigo') ? 'Recife Antigo' : 'doesnt exist',
        santoAmaro: checkboxState.includes('santoAmaro') ? 'Santo Amaro' : 'doesnt exist',
        saoJose: checkboxState.includes('saoJose') ? 'Sao Jose' : 'doesnt exist',
      }
    })
    const data = response.data
    setFetchProperties(data)
  }

  useEffect(() => {
    if (checkboxState.length > 0) {
      fetchDataFromBackend()
    }
  }, [checkboxState])

  return (
    <StyledBoxMap>
      <div className='container'>
        <div className='boxPesquisa'>
          <BarraPesquisa />
        </div>
        <MapC fetchProperties={fetchProperties} />
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
            {Object.entries(checkboxValues).map(([key, value]) => (
              <CheckBox key={key}
                nome={key}
                status={value}
                handleCheckboxChange={handleCheckboxChange}
              />
            ))}

          </div>
        </div>
      </div>
    </StyledBoxMap>
  )
}

export default BoxMap
