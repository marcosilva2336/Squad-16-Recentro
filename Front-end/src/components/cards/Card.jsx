import React from 'react'
import { Box, Text, Title, Content, Imagem, CardContainer } from './StyledCard'
import img from '../../assets/imagem-card-1.jpg'
import img2 from '../../assets/imagem-card-2.png'
import img3 from '../../assets/imagem-card-3.png'

function Card(){
  return(
    <CardContainer>
      <Box>
        <Imagem src={img} alt="Imagem 2" />
        <Content>
          <Title>Rua 2</Title>
          <Text>Breve descrição para a Rua 2.</Text>
        </Content>
      </Box>
      <Box>
        <Imagem src={img2} alt="Imagem 2" />
        <Content>
          <Title>Rua 2</Title>
          <Text>Breve descrição para a Rua 2.</Text>
        </Content>
      </Box>
      <Box>
        <Imagem src={img3} alt="Imagem 2" />
        <Content>
          <Title>Rua 2</Title>
          <Text>Breve descrição para a Rua 2.</Text>
        </Content>
      </Box>
    </CardContainer>
  )
}

export default Card
