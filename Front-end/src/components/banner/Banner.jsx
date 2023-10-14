import { Container, TextContainer, Overlay } from './StyledBanner'
import pracaRecife from '../../assets/pracarecife.jpg'

function Banner() {
  return (
    <Container>
      <TextContainer>
        <p>o Gabinete do Centro do Recife realizou o Portfólio de levantamento dos imóveis do território quanto ao tipo de uso e possibilidade de reocupação</p>
      
      </TextContainer>
      <Overlay>
        <img src={pracaRecife} alt="Marco Zero" />
      </Overlay>
    </Container>
  )
}

export default Banner
