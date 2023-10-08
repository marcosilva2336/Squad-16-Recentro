import { Overlay, StyledModal } from './StyledModal'

import closeIcon from '../../assets/close.svg'

import ReactPortal from '../portal/Portal'
import Login from '../login/Login'

function Modal({ onCloseModal }) {
  return (
    <ReactPortal containerId='portal-root'>
      <Overlay>
        <StyledModal>
          <Login />
          <button onClick={onCloseModal}>
            <img src={closeIcon} alt="Botão de fechar" />
          </button>
        </StyledModal>
      </Overlay>
    </ReactPortal>
  )
}

export default Modal
