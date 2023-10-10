import styled from 'styled-components'

export const FormTitle = styled.h2`
  margin: 0 0 5px 0;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 560px;

  input {
    padding: 10px;
    border-radius: 4px;
    border: none;
  }

  button {
    margin-top: 10px;
    padding: 15px;
    border-radius: 8px;
    border: 0;
  }

  button:hover {
    opacity: 0.9
  }
`
