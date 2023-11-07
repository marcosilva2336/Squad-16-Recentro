import React from 'react';
import { Link } from 'react-router-dom';
import { TableContainer, TableHeader, TableBody, TableRow, TableCell, AddButton, SearchInput, Title } from './StyledTabela';

const Tabela = () => {
    return (
        <>
          <Title>Registro de Imóveis</Title>
            <SearchInput placeholder="🔍 Pesquisar..." />
            <TableContainer>
                <TableHeader>
                    <TableCell>ID</TableCell>
                    <TableCell>Nome</TableCell>
                    <TableCell>Localização</TableCell>
                </TableHeader>
                <TableBody>
                    {/* Os dados da tabela iriam aqui */}
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>Imóvel Exemplo</TableCell>
                        <TableCell>Cidade Exemplo</TableCell>
                    </TableRow>
                    {/* Repetir TableRow para cada linha de dados */}
                </TableBody>
            </TableContainer>
            <AddButton as={Link} to="/caminho-para-adicionar-imovel">Adicionar Imóvel</AddButton>
        </>
    );
};

export default Tabela;
