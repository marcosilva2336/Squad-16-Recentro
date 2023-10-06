import { Container } from './StyledBanner'
import pracaRecife from '../assets/pracarecife.jpg'

function Banner() {
  return (
    <Container>
      <img src={pracaRecife} alt="Marco Zero" />
    </Container>
  )
}

export default Banner
