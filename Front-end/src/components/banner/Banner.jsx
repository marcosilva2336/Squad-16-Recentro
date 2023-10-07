import { Container, TextContainer, Overlay } from './StyledBanner'
import pracaRecife from '../../assets/pracarecife.jpg'

function Banner() {
  return (
    <Container>
      <TextContainer>
        <p>Text Text Text Text Text Text</p>
        <p>Text Text Text Text Text Text</p>
        <p>Text Text Text Text Text Text</p>
      </TextContainer>
      <Overlay>
        <img src={pracaRecife} alt="Marco Zero" />
      </Overlay>
    </Container>
  )
}

export default Banner
