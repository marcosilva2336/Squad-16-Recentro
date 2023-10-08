import styled from 'styled-components'

export const Overlay = styled.div`
  background-color: black;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999999;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
`

export const StyledModal = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 4px;
  background-color: white;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    border: 0;
    background: transparent;
  }
`

export const TextContainer = styled.div`

`


