import React from "react";
import { FaGhost, FaClipboardCheck, FaExclamationTriangle } from "react-icons/fa";
import { Box } from "./StyledCard";

function Cards({ bairro, darkMode }) {
  let nomeBairro, valor, icone, backgroundColor;

  switch (bairro) {
    case "1":
      nomeBairro = "Em Obras";
      valor = 35;
      icone = <FaExclamationTriangle className="icon" size={42} />;
      backgroundColor = (darkMode ? "#202529" : "#FF9144");
      break;
    case "2":
      nomeBairro = "Abandonado";
      valor = 75;
      icone = <FaGhost className="icon" size={42} />;
      backgroundColor = (darkMode ? "#202529" : "#F34920");
      break;
    case "3":
      nomeBairro = "Disponível";
      valor = 80;
      icone = <FaClipboardCheck className="icon" size={42} />;
      backgroundColor = (darkMode ? "#202529" : "#229C7F");
      break;
    // Adicione mais casos conforme necessário
  }

  return (
    <Box darkMode={darkMode} style={{ backgroundColor: backgroundColor }}>
      <h1>{nomeBairro}</h1>
      <p>{valor}</p>
      {icone}
    </Box>
  );
}

export default Cards;