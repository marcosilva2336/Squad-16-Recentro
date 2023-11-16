import React, { useState } from 'react';
import {
  ScrollableTableContainer,
  TableContainer,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  SearchInput,
  Title,
  TabContainer,
  Tab,
  ButtonContainer,
  ColumnRangeButton,
  SearchAndTabContainer,
} from './StyledTabela';

const Tabela = ({ darkMode }) => {
  const [colRange, setColRange] = useState(0);


  const columnNames = [
    "ID", "DSQFL", "DSQ", "Bairro", "Rua", "Número", "Tipo de Empreendimento", "Área Total", "Situação", "Restaurantes e Cafés",
    "Nome do Edifício", "Nº de Pavimentos em Uso", "Disponibilidade", "Atividade de Funcionamento", "Grau de Risco", "Laudo", "Acessibilidade",
    "Pichação", "Observações", "Proprietário Localizado", "Investimento", "Qual Investimento", "Tributação", "Autorização de Informação",
    "Proprietário Cartório", "Proprietário Campo", "Contato Proprietário", "Coincidência Proprietário", "Uso do Imóvel",
    "Valor do Aluguel", "Valor de Venda", "Latitude", "Longitude", "RGI", "Planta", "Planta Regional", "Judicialização",
    "Descrição da Judicialização", "Observações", "Processos Abertos Desde 2018", "Número da Licença", "Número do Processo"
  ];


  const generateFakeData = () => {
    return Array.from({ length: 10 }, (_, rowIndex) => {
      return columnNames.map((colName, colIndex) => {
        switch (colName) {
          case "ID":
            return rowIndex + 1;
          case "Número":
          case "Latitude":
          case "Longitude":
            return Math.random().toFixed(2);
          case "Área Total":
            return `${Math.floor(Math.random() * 1000)} m²`;
          case "Rua":
            return `Rua ${rowIndex + 1}`;
          case "Situação":
            return ["Disponível", "Abandonado", "Em Obra"][rowIndex % 3];
          case "Bairro":
            return ["Centro", "Santo Amaro", "Boa Vista"][rowIndex % 3];
          case "DSQ":
          case "DSQFL":
            return `DSQ-${Math.floor(Math.random() * 100)}`;
          case "Tipo de Empreendimento":
            return ["Residencial", "Comercial", "Misto"][rowIndex % 3];
          case "Restaurantes e Cafés":
            return Math.floor(Math.random() * 20);
          case "Nome do Edifício":
            return `Edifício ${rowIndex + 1}`;
          case "Nº de Pavimentos em Uso":
            return Math.floor(Math.random() * 20) + 1;
          case "Disponibilidade":
            return ["Alugado", "Vago", "Reservado"][rowIndex % 3];
          case "Atividade de Funcionamento":
            return ["Funcionando", "Fechado", "Em Manutenção"][rowIndex % 3];
          case "Grau de Risco":
            return ["Baixo", "Médio", "Alto"][rowIndex % 3];
          case "Laudo":
            return ["Aprovado", "Reprovado", "Pendente"][rowIndex % 3];
          case "Acessibilidade":
            return ["Acessível", "Não Acessível"][rowIndex % 2];
          case "Pichação":
            return ["Sim", "Não"][rowIndex % 2];
          case "Observações":
            return `Observação ${rowIndex + 1}`;
          case "Proprietário Localizado":
            return ["Sim", "Não"][rowIndex % 2];
          case "Investimento":
            return ["Sim", "Não"][rowIndex % 2];
          case "Qual Investimento":
            return `Investimento ${Math.floor(Math.random() * 100000)}`;
          case "Tributação":
            return ["Alta", "Média", "Baixa"][rowIndex % 3];
          case "Autorização de Informação":
            return ["Autorizado", "Não Autorizado"][rowIndex % 2];
          case "Proprietário Cartório":
            return `Cartório ${rowIndex + 1}`;
          case "Proprietário Campo":
            return `Campo ${rowIndex + 1}`;
          case "Contato Proprietário":
            return `Contato ${rowIndex + 1}`;
          case "Coincidência Proprietário":
            return ["Sim", "Não"][rowIndex % 2];
          case "Uso do Imóvel":
            return ["Comercial", "Residencial", "Misto"][rowIndex % 3];
          case "Valor do Aluguel":
          case "Valor de Venda":
            return `R$ ${Math.floor(Math.random() * 10000)}`;
          case "Latitude":
            return (Math.random() * 180 - 90).toFixed(6); 
          case "Longitude":
            return (Math.random() * 360 - 180).toFixed(6); 
          case "RGI":
            return `RGI-${Math.floor(Math.random() * 10000)}`;
          case "Planta":
            return ["Planta A", "Planta B", "Planta C"][rowIndex % 3];
          case "Planta Regional":
            return ["Regional A", "Regional B", "Regional C"][rowIndex % 3];
          case "Judicialização":
            return ["Sim", "Não"][rowIndex % 2];
          case "Descrição da Judicialização":
            return `Descrição ${rowIndex + 1}`;
          case "Observações":
           
            return `Outra observação ${rowIndex + 1}`;
          case "Processos Abertos Desde 2018":
            return Math.floor(Math.random() * 10);
  
          default:
            return `Dado ${colIndex + 1}-${rowIndex + 1}`;
        }
      });
    });
  };
  const fakeData = generateFakeData();

  // Função para mudar o intervalo de colunas
  const handleColRangeChange = (rangeNumber) => {
    setColRange(rangeNumber);
  };

  const handleTabChange = (rangeNumber) => {
    setColRange(rangeNumber);
  };
  // Cálculo dos índices das colunas com base no número clicado
  const startColIndex = colRange * 10;
  const endColIndex = Math.min(startColIndex + 10, columnNames.length);

  // Filtra os nomes das colunas e os dados com base no intervalo selecionado
  const displayedColumnNames = columnNames.slice(startColIndex, endColIndex);
  const displayedData = fakeData.map(row => row.slice(startColIndex, endColIndex));

  return (
    <>
      <Title darkMode={darkMode}>Registro de Imóveis</Title>

      <SearchAndTabContainer>

        <SearchInput darkMode={darkMode} placeholder="🔍 Pesquisar..." />

        <TabContainer darkMode={darkMode}>
          {[1, 2, 3, 4, 5].map(rangeNumber => (
            <Tab
              darkMode={darkMode}
              key={rangeNumber}
              isActive={colRange === rangeNumber - 1}
              onClick={() => handleTabChange(rangeNumber - 1)}
            >
              T {rangeNumber}
            </Tab>
          ))}
        </TabContainer>
      </SearchAndTabContainer>
      <ScrollableTableContainer>
        <TableContainer darkMode={darkMode}>
          <table>
            <TableHeader darkMode={darkMode}>
              <tr>
                {displayedColumnNames.map((name, index) => (
                  <TableCell darkMode={darkMode} key={index}>{name}</TableCell>
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
      <ButtonContainer>
        {[1, 2, 3, 4, 5].map(rangeNumber => (
          <ColumnRangeButton darkMode={darkMode} key={rangeNumber} onClick={() => handleColRangeChange(rangeNumber - 1)}>
            {rangeNumber}
          </ColumnRangeButton >
        ))}
      </ButtonContainer>

    </>
  );
};

export default Tabela;