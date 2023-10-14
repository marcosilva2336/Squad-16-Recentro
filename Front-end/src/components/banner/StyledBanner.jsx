import styled from 'styled-components'

export const Overlay = styled.div`
  width: 100%;
  height: 500px;
  background: linear-gradient(180deg, #FFF 0%, rgba(255, 105, 0, 0.40) 60.42%);
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    opacity: 50%;
    object-fit: cover;
    height: 500px;
    width: 100%;
  }
`

export const TextContainer = styled.div`
  position: absolute;
  color: #FFFFF0;
  font-weight: bold;
  font-size: 27px;
  display: block;
  z-index: 1;
  max-width: 500px;
  text-align: justify;
`
