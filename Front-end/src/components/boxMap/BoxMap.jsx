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
    'Disponível',
    'Ocupado',
    'Em obras',
    'Abandonado',
    'Cowork',
    'Recife Antigo',
    'Santo Amaro',
    'São José',
  ]
  const defaultCheckedCheckbox = 'Recife Antigo'
  const [checkboxState, setCheckboxState] = useState([defaultCheckedCheckbox])

  const [searhBarInput, setSearchBarInput] = useState('')

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
        available: checkboxState.includes('Disponível') ? 'Disponível' : 'doesnt exist',
        occupied: checkboxState.includes('Ocupado') ? 'Ocupado' : 'doesnt exist',
        atConstruction: checkboxState.includes('Em obra') ? 'Em obra' : 'doesnt exist',
        abandoned: checkboxState.includes('Abandonado') ? 'Abandonado' : 'doesnt exist',
        cowork: checkboxState.includes('Cowork') ? 'Cowork' : 'doesnt exist',
        recifeAntigo: checkboxState.includes('Recife Antigo') ? 'Recife Antigo' : 'doesnt exist',
        santoAmaro: checkboxState.includes('Santo Amaro') ? 'Santo Amaro' : 'doesnt exist',
        saoJose: checkboxState.includes('Sao Jose') ? 'Sao Jose' : 'doesnt exist',
      }
    })
    const data = response.data
    setFetchProperties(data)
  }

  useEffect(() => {
    fetchDataFromBackend()
  }, [checkboxState])

  const handleSearchBarInput = (event) => {
    setSearchBarInput(event.target.value)
  }

  const filteredDataBySearchBarInput = fetchProperties.filter(data => data.endereco.includes(searhBarInput))
  const dataToBeDisplayedOnMap = filteredDataBySearchBarInput.length > 0 ? filteredDataBySearchBarInput : fetchProperties

  console.log(checkboxState)

  return (
    <StyledBoxMap>
      <div className='container'>
        <div className='boxPesquisa'>
          <BarraPesquisa handleSearchBarInput={handleSearchBarInput} />
        </div>
        <MapC dataToBeDisplayedOnMap={dataToBeDisplayedOnMap} />
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
