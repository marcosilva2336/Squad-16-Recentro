import { createPortal } from 'react-dom'

function ReactPortal({ children, containerId = 'portal-root'}) {
  let container = document.getElementById(containerId)

  if (!container) {
    container = document.createElement('div')
    container.setAttribute('id', containerId)
    document.body.appendChild(container)
  }

  return createPortal(children, container)
}

export default ReactPortal
