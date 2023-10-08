import { Overlay, StyledModal, TextContainer } from './StyledModal'

import closeIcon from '../../assets/close.svg'

import ReactPortal from '../portal/Portal'

function Modal({ children, onCloseModal }) {
  return (
    <ReactPortal containerId='portal-root'>
      <Overlay>
        <StyledModal>
          <TextContainer>
            {children}
          </TextContainer>
          <button onClick={onCloseModal}>
            <img src={closeIcon} alt="Botão de fechar" />
          </button>
        </StyledModal>
      </Overlay>
    </ReactPortal>
  )
}

export default Modal
