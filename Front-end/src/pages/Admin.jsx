import React, { useState } from "react"; // Import useState from React
import Sidebar from "../components/sidebar-adm/Sidebar";
import Cards from "../components/card-adm/Cards";
import Tabela from "../components/tabela-adm/tabela";
import { StyledContainer } from "../components/card-adm/StyledCard"
import styled from "styled-components";

// Adiciona propriedades para o modo escuro no componente estilizado Body
const Body = styled.div`
    display: flex;
    flex: 1 1 100vw;
    background-color: ${props => props.darkMode ? '#181a1e' : '#F6F6F9'}; 
    color: ${props => props.darkMode ? 'white' : 'black'}; 
    transition: background-color 0.3s, color 0.3s; 
`;
const Content = styled.div`
  display: flex;
  flex-direction: column; 
  background-color: ${props => props.darkMode ? '#181a1e' : '#F6F6F9'}; 
  width: 100vw;
  height: 100vh;
  transition: background-color 0.3s, color 0.3s; 
`;

function Admin() {
    const [darkMode, setDarkMode] = useState(false); // Estado para controlar o modo escuro

    const toggleDarkMode = () => {
        setDarkMode(!darkMode); // Alterna o estado do darkMode
    };

    return (
        <Body darkMode={darkMode}>
            <Sidebar onToggleDarkMode={toggleDarkMode} darkMode={darkMode} />
            <Content darkMode={darkMode}> {/* Adicione o prop darkMode aqui */}
                <StyledContainer>
                    <Cards bairro='1' darkMode={darkMode} />
                    <Cards bairro='2' darkMode={darkMode} />
                    <Cards bairro='3' darkMode={darkMode} />
                </StyledContainer>
                <Tabela darkMode={darkMode} />
            </Content>
        </Body>
    );
    
}

export default Admin;
