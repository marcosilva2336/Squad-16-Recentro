import React from "react";
import { Box, Text, Title, Content, Imagem } from "./StyledCard";


function Card({img}){
    return(
        <>
            <Box>
                <Imagem src={img} alt="Imagem 2" />
                <Content>
                    <Title>Rua 2</Title>
                    <Text>Breve descrição para a Rua 2.</Text>
                </Content>
            </Box>
        </>
    )
}

export default Card