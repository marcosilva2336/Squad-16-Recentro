import React from 'react'
import {StyledCheckBox} from './StyledCheckBox'


function CheckBox({nome,status}) {

  return (

    <StyledCheckBox>
      <div className='box'>
        <input id={nome} type="checkbox"/>
        <span className="check"></span>
        <label htmlFor={nome}>{status}</label>
      </div>
    </StyledCheckBox>

  )
}

export default CheckBox