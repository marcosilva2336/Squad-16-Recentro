import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ScrollableTableContainer, 
  TableContainer, 
  TableHeader, 
  TableBody, 
  TableRow, 
  TableCell,  
  SearchInput, 
  Title, 
  ShowMoreButton 
} from './StyledTabela';

const Tabela = ({ darkMode }) => {
    const [showAll, setShowAll] = useState(false);

    // Gere dados fictícios com múltiplas colunas
    const fakeData = Array.from({ length: 10 }, (_, index) => {
      return Array.from({ length: 43 }, (_, colIndex) => `Dado ${colIndex + 1}-${index + 1}`);
    });

    // Ajuste os dados exibidos com base no estado 'showAll'
    const displayedData = showAll ? fakeData : fakeData.map(row => row.slice(0, 10));

    return (
      <>
        <Title darkMode={darkMode}>Registro de Imóveis</Title>
        <SearchInput darkMode={darkMode} placeholder="🔍 Pesquisar..." />
        <ScrollableTableContainer>
          <TableContainer darkMode={darkMode}>
            <table> 
              <TableHeader darkMode={darkMode}>
                <tr> 
                  {Array.from({ length: showAll ? 43 : 10 }, (_, index) => (
                    <TableCell darkMode={darkMode} key={index}>Coluna {index + 1}</TableCell>
                  ))}
                </tr>
              </TableHeader>
              <TableBody darkMode={darkMode}>
                {displayedData.map((row, rowIndex) => (
                  <TableRow key={rowIndex} darkMode={darkMode}>
                    {row.map((cell, cellIndex) => (
                      <TableCell darkMode={darkMode} key={cellIndex}>{cell}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </table>
          </TableContainer>
        </ScrollableTableContainer>
        <ShowMoreButton darkMode={darkMode} onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Ver Menos' : 'Ver Mais'}
        </ShowMoreButton>
        
      </>
    );
};

export default Tabela;
