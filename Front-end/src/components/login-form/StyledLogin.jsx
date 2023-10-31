import styled from 'styled-components'

export const FormTitle = styled.h2`
  margin: 0 0 5px 0;
  display: flex;
  justify-content: center;
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
    background-color: #dfe0e2;
  }

  button {
    margin-top: 10px;
    padding: 8px;
    border-radius: 8px;
    border: 0;
    background-color: #FF6900;
    color: #fff;
    font-size: 20px;
  }

  button:hover {
    opacity: 0.9
  }
`
