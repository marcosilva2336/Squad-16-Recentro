import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999999;
  width: 100%;
  height: 100%;
  background-color: #02020228;
`

export const StyledModal = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 600px;
  height: 250px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;

  > button {
    position: absolute;
    top: 0;
    right: 0;
    margin: 20px;
    background: transparent;
    border: 0;
  }

  img {
    width: 20px;
  }
`
