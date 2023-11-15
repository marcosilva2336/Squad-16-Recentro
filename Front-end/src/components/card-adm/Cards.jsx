import React from "react";
import { FaGhost, FaClipboardCheck ,FaExclamationTriangle} from 'react-icons/fa';
import { Box } from "./StyledCard";

function Cards({ bairro, darkMode }) { 
    let nomeBairro, valor, icone;

    switch (bairro) {
        case "1":
            nomeBairro = 'Em Obras';
            valor = 35;
            icone = <FaExclamationTriangle className='icon' size={42} />;
            break;
        case "2":
            nomeBairro = 'Abandonado';
            valor = 75;
            icone = <FaGhost className='icon' size={42} />;
            break;
        case "3":
            nomeBairro = 'Disponível';
            valor = 80;
            icone = <FaClipboardCheck className='icon' size={42} />;
            break;
        // Adicione mais casos conforme necessário
    }

    return (
        <Box darkMode={darkMode}>
            <h1>{nomeBairro}</h1>
            <p>{valor}</p>
            {icone}
        </Box>
    );
}

export default Cards;
