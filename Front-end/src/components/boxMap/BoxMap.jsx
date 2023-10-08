import React from 'react'
import { StyledBoxMap } from './StyledBoxMap'
import { useState } from 'react' 
import arrowDown from '../../assets/arrowDown.png'
import MapC from '../map/Map'
import CheckBox from '../checkBox/CheckBox'


function BoxMap() {

  const [isVisible, setIsVisible] = useState(true)

  return (

    <>
      <StyledBoxMap>

        <div className='container'>
          <MapC>
          </MapC>
          <div className='menuP'>
            <h1>Filtros</h1>
            <button id='buttonMenu' onClick={() => setIsVisible(!isVisible)}><img src={arrowDown}/>  </button>
          </div>

          <div className={isVisible ? 'sumir' : 'menu'}>
            
            <CheckBox nome='um' status='Disponiveis'></CheckBox>
            <CheckBox nome='um' status='Ocupados'></CheckBox>

          </div>

        </div>

      </StyledBoxMap>

    </>

  )
}

export default BoxMap