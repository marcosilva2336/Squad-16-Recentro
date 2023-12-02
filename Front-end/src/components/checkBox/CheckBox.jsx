import React from 'react'
import { StyledCheckBox } from './StyledCheckBox'

function CheckBox({ nome, status, handleCheckboxChange }) {
  return (
    <StyledCheckBox>
      <div className='box'>
        <span className='check'></span>
        <label htmlFor={nome}>
          <input
            type='checkbox'
            id={nome}
            name={nome}
            value={status}
            onChange={() => handleCheckboxChange(event.target.value)}
          />
          {status}
        </label>
      </div>
    </StyledCheckBox>
  )
}

export default CheckBox
