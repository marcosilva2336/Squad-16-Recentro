import React from "react";
import { FiHome, FiEdit, FiTrash2  } from 'react-icons/fi'
import { Box } from "./StyledCard";

function Cards(props){
    let bairro, valor, icone;

    switch(props.bairro){
        case "1":
            bairro = 'Santo Amaro';
            valor = 35;
            icone = <FiHome className='icon' size={42} />
            break;
        case "2":
            bairro = 'Santo Antônio';
            icone = <FiEdit className='icon' size={42} />
            valor = 75;
            break;
        case "3":
            bairro = 'São José';
            icone = <FiTrash2 className='icon' size={42} />
            valor = 80;
            break;
    }

    return(
        <Box>
            <h1>{bairro}</h1>
            <p>{valor}</p>
            {icone}
        </Box>
    )
}

export default Cards;