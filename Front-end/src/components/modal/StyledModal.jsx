import styled from 'styled-components'

export const Overlay = styled.div`
  background-color: #000000;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999999;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #02020228;
`

export const StyledModal = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: #FF6900;
  border-radius:20px;
  display: flex;
  justify-content: center;
  align-items: center;

  button {

    img {
      width: 20px;
      height: 20px;

    }
    width: 20px;
    height: 20px;
    position: absolute;
    top: 260px;
    right: 480px;
    border: 0;
    background: transparent;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }

`

export const TextContainer = styled.div`

`


