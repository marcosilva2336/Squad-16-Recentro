import React from "react";
// Importando ícones específicos do Font Awesome
import { FaCity, FaBuilding, FaLandmark } from 'react-icons/fa';
import { Box } from "./StyledCard";

function Cards({ bairro, darkMode }) { // Agora está recebendo darkMode como prop
    let nomeBairro, valor, icone;

    switch (bairro) {
        case "1":
            nomeBairro = 'Em Obras';
            valor = 35;
            icone = <FaCity className='icon' size={42} />;
            break;
        case "2":
            nomeBairro = 'Abandonado';
            valor = 75;
            icone = <FaBuilding className='icon' size={42} />;
            break;
        case "3":
            nomeBairro = 'Disponível';
            valor = 80;
            icone = <FaLandmark className='icon' size={42} />;
            break;
        // Adicione mais casos conforme necessário
    }

    return (
        <Box darkMode={darkMode}> {/* Agora o darkMode é passado para o Box */}
            <h1>{nomeBairro}</h1>
            <p>{valor}</p>
            {icone}
        </Box>
    );
}

export default Cards;
