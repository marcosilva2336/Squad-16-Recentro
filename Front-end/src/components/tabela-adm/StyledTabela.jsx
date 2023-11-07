import styled from 'styled-components';

// Estilizando o container da tabela
export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
  max-width: 95%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  @media screen and (max-width:1400px){
    width: 92.5%;
  }

`;

// Estilizando o cabeçalho da tabela
export const TableHeader = styled.div`
  display: flex;
  background: #FF6900;
  padding: 10px;
  font-weight: 600;
  text-shadow: 1px 1px 4px  #222;
  color: #fff;
  

`;

// Estilizando o corpo da tabela
export const TableBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  
`;

// Estilizando as linhas da tabela
export const TableRow = styled.div`
  display: flex;
  padding: 10px;
  &:nth-child(odd) {
    background: #f9f9f9;
  }
`;

// Estilizando as células da tabela
export const TableCell = styled.div`
  flex: 1;
  padding: 5px 10px;
  
`;

// Estilizando o botão de adicionar imóvel
export const AddButton = styled.button`
    position: absolute;
    right:20px;
    bottom: 30px;
    background: transparent;
    padding: 10px 20px;
    border: 2px dashed #f09611;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    text-decoration: none;
    color: black;

  &:hover {
    background-color: #f17f21;
  }
  
`;



export const SearchInput = styled.input`
margin-left: 22px;
margin-top: 18px;
  width: 280px;
  padding: 10px 40px 10px 20px; // Espaço para o ícone
  border: none;
  border-radius: 7px; // Bordas arredondada
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

export const Title = styled.h1`
  color: #333; // Exemplo de cor
  text-align: center; // Centralizar
  margin-top: 45px;
  font-weight: 600;
`;


