import React from "react";
// Importando ícones específicos do Font Awesome
import { FaCity, FaBuilding, FaLandmark } from 'react-icons/fa';
import { Box } from "./StyledCard";

function Cards(props) {
    let bairro, valor, icone;

    switch (props.bairro) {
        case "1":
            bairro = 'Santo Amaro';
            valor = 35;
            // FaCity pode representar uma cidade
            icone = <FaCity className='icon' size={42} />;
            break;
        case "2":
            bairro = 'Santo Antônio';
            valor = 75;
            // FaBuilding pode representar prédios/áreas urbanas
            icone = <FaBuilding className='icon' size={42} />;
            break;
        case "3":
            bairro = 'São José';
            valor = 80;
            // FaLandmark pode representar pontos de referência ou áreas conhecidas
            icone = <FaLandmark className='icon' size={42} />;
            break;
        // Adicione mais casos conforme necessário
    }

    return (
        <Box>
            <h1>{bairro}</h1>
            <p>{valor}</p>
            {icone}
        </Box>
    );
}

export default Cards;
