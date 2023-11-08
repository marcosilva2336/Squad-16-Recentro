import React from 'react';
import { Link } from 'react-router-dom';
import { TableContainer, TableHeader, TableBody, TableRow, TableCell, AddButton, SearchInput, Title } from './StyledTabela';

const Tabela = ({ darkMode }) => {
    return (
        <>
          <Title darkMode={darkMode}>Registro de Imóveis</Title>
            <SearchInput darkMode={darkMode} placeholder="🔍 Pesquisar..." />
            <TableContainer darkMode={darkMode}>
                <TableHeader darkMode={darkMode}>
                    <TableCell>ID</TableCell>
                    <TableCell>Nome</TableCell>
                    <TableCell>Localização</TableCell>
                </TableHeader>
                <TableBody darkMode={darkMode}>
                    {/* Os dados da tabela iriam aqui */}
                    <TableRow darkMode={darkMode}>
                        <TableCell darkMode={darkMode}>1</TableCell>
                        <TableCell darkMode={darkMode}>Imóvel Exemplo</TableCell>
                        <TableCell darkMode={darkMode}>Cidade Exemplo</TableCell>
                    </TableRow>
                    {/* Repetir TableRow para cada linha de dados */}
                </TableBody >
                <AddButton darkMode={darkMode} as={Link} to="/caminho-para-adicionar-imovel">Adicionar Imóvel</AddButton>
            </TableContainer>
          
        </>
    );
};

export default Tabela;
