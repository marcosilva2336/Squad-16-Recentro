import styled from 'styled-components'


export const CardContainer = styled.div`

display: flex;
justify-content: space-around;
align-items: center;
`

export const Box = styled.div`
    width: 320px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    margin: 16px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(265px, 1fr));
    gap: 2rem;
    `
    
export const Content = styled.div`
    padding: 16px;
`
export const Imagem = styled.img`
width: 100%;
height: 250px;
object-fit: cover;
`

export const Title = styled.h2`
    margin-top: 0;
    margin-bottom: 8px;
`

export const Text = styled.p`
    margin: 0;
    color: #555;
`