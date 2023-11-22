import React from 'react'
import { StyledCheckBox } from './StyledCheckBox'

function CheckBox({ nome, status, onChange, isChecked }) {
  return (
    <StyledCheckBox>
      <div className='box'>
        <span className='check'></span>
        <label htmlFor={nome}>
          <input
            type='checkbox'
            id={nome}
            name={nome}
            checked={isChecked}
            onChange={() => onChange(nome)}
          />
          {status}
        </label>
      </div>
    </StyledCheckBox>
  )
}

export default CheckBox
