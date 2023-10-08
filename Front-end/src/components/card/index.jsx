import React from 'react'
import Card from './Card'
import { Container } from './StyledCard'
import img from "../../assets/imagem-card-1.jpg"
import img2 from "../../assets/imagem-card-2.png"
import img3 from "../../assets/imagem-card-3.png"


function Cards(){
    return (
        <>
            <Container>
                <Card img={img}/>
                <Card img={img2}/>
                <Card img={img3}/>
            </Container>
        </>
        
    )   
}

export default Cards





