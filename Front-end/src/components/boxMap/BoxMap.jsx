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

  function handleCheckboxChange(checkboxValue) {
    if (!checkboxState.includes(checkboxValue))  {
      setCheckboxState([...checkboxState, checkboxValue])
    }

    if (checkboxState.includes(checkboxValue)) {
      setCheckboxState(checkboxState.filter(checkbox => checkbox !== checkboxValue))
    }
  }
  
  const fetchDataFromBackend = async () => {
    const response = await axios.get(`http://localhost:8080/imovel/checkbox-filter?available=${checkboxState['disponiveis']}&occupied=${checkboxState['ocupados']}&atConstruction=${checkboxState['emObras']}&abandoned=${checkboxState['abandonados']}&cowork=${checkboxState['cowork']}&recifeAntigo=${checkboxState['recifeAntigo']}&santoAmaro=${checkboxState['santoAmaro']}&saoJose=${checkboxState['saoJose']}`)
    const data = response.data
    setFetchProperties(data)
  }

  useEffect(() => {
    fetchDataFromBackend()
  })

  const [fetchProperties, setFetchProperties] = useState([])


  console.log(checkboxState)

  return (
    <StyledBoxMap>
      <div className='container'>
        <div className='boxPesquisa'>
          <BarraPesquisa />
        </div>
        <MapC />
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
