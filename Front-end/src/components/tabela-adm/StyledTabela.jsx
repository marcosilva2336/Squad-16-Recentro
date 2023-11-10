import styled from 'styled-components';

// Estilizando o container da tabela
export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
  max-width: 95%;
  box-shadow: ${props => props.darkMode ? '0px 4px 12px rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.1) 0px 4px 12px'};
 position: relative;
  @media screen and (max-width:1400px){
    width: 92.5%;
  }
`;

// Estilizando o cabeçalho da tabela
export const TableHeader = styled.div`
  display: flex;
  background: #FF6900; // Mantém a cor original do cabeçalho da tabela
  padding: 10px;
  font-weight: 600;
  text-shadow: ${props => props.darkMode ? '1px 1px 4px #000' : '1px 1px 4px #222'}; // Sombra de texto mais forte no modo escuro
  color: #fff;
`;

// Estilizando o corpo da tabela
export const TableBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  background: ${props => props.darkMode ? '#202529' : '#f9f9f9'};
`;

// Estilizando as linhas da tabela
export const TableRow = styled.div`
  display: flex;
  padding: 10px;
  &:nth-child(odd) {
     // Cor mais escura para o modo escuro
  }
`;

// Estilizando as células da tabela
export const TableCell = styled.div`
  flex: 1;
  padding: 5px 10px;
  color: ${props => props.darkMode ? '#fff' : 'inherit'}; // Texto branco no modo escuro
`;

// Estilizando o botão de adicionar imóvel
export const AddButton = styled.button`
  position: absolute;
  right: 20px;
  bottom: -120px;
  background: transparent;
  padding: 10px 20px;
  border: 2px dashed #f09611;
  box-shadow: ${props => props.darkMode ? '2px 2px 4px rgba(255, 255, 255, 0.2)' : '2px 2px 4px rgba(0, 0, 0, 0.2)'};
  border-radius: 6px;
  text-decoration: none;
  color: ${props => props.darkMode ? '#fff' : '#000'};

  &:hover {
    background-color: ${props => props.darkMode ? '#f17f21' : '#f09611'};
  }
`;

export const SearchInput = styled.input`
  margin-left: 22px;
  margin-top: 18px;
  width: 280px;
  padding: 10px 40px 10px 20px;
  border: none;
  border-radius: 7px;
  background-color: ${props => props.darkMode ? '#202529' : '#fff'};
  box-shadow: ${props => props.darkMode ? '0 2rem 3rem rgba(0, 0, 0, 0.4)' : '0px 4px 12px rgba(0, 0, 0, 0.1)'};
`;

export const Title = styled.h1`
  color: ${props => props.darkMode ? '#fff' : '#333'};
  text-align: center;
  margin-top: 45px;
  font-weight: 600;
`;
