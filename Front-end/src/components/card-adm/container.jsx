import React from 'react'
import { StyledContainer } from './container-styled'
import { Card } from './container-styled'
import { FiHome,FiEdit, FiTrash2  } from 'react-icons/fi'

function Container() {
    return (<StyledContainer>
        <Card>
            <h1>Imoveis Adicionados</h1>
            <p>30</p>
            <FiHome className='icon' size={42} />
        </Card>
        <Card>
            <h1>Imoveis atualizados</h1>
            <p>20</p>
            <FiEdit className='icon' size={42} />
        </Card>
        <Card>
            <h1>Imoveis Removidos</h1>
            <p>40</p>
            <FiTrash2 className='icon' size={42} />
        </Card>
    </StyledContainer>)
}

export default Container