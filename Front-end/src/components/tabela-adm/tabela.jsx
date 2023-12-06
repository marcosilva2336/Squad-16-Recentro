import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import {
  ScrollableTableContainer,
  TableContainer,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  Title,
  Title2,
  TabContainer,
  Tab,
  ButtonContainer,
  ColumnRangeButton,
  SearchAndTabContainer,
  ModalContainer,
  PopupButton,
  ModalContent,
  ButtonClose,
  ButtonCloseContainer
} from './StyledTabela';

import axios from 'axios';

const Tabela = ({ darkMode }) => {
  const [colRange, setColRange] = useState(0);
  const [realData, setRealData] = useState([{}]);
  const [activeButton, setActiveButton] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const columnNames = [
    "ID", "DSQFL", "DSQ", "Bairro", "Rua", "Número", "Tipo de Empreendimento", "Área Total", "Situação", "Restaurantes e Cafés",
    "Nome do Edifício", "Nº de Pavimentos em Uso", "Disponibilidade", "Atividade de Funcionamento", "Grau de Risco", "Laudo", "Acessibilidade",
    "Pichação", "Observação 1", "Observação 2 ", "Proprietário Localizado", "Investimento", "Qual Investimento", "Tributação", "Autorização de Informação",
    "Proprietário Cartório", "Proprietário Campo", "Contato Proprietário",  "Uso do Imóvel",
    "Valor do Aluguel", "Valor de Venda", "Latitude", "Longitude", "RGI", "Planta", "Planta Regional", "Judicialização",
    "Descrição da Judicialização", "Processos Abertos Desde 2018", "Número da Licença", "Número do Processo", "Coincidência Proprietário"
  ];

  const fetchDataFromBackend = async () => {
    try {
      const response = await axios.get('http://localhost:8080/imovel/findall');
      const data = response.data;
      console.log(data);
  
      if (Array.isArray(data)) {
        const extractedData = data.map(item => ({
          
            ID: item.id,
            DSQFL: item.dsqfl,
            DSQ: item.dsq,
            Bairro: item.bairro,
            Rua: item.rua,
            Numero: item.numero,
            TipoDeEmpreendimento: item.tipoEmpreendimento,
            AreaTotal: item.areaTotal,
            Situacao: item.situacao,
            RestaurantesECafes: item.restauranteCafes,
            NomeDoEdificio: item.nomeEdificil,
            NumeroDePavimentosEmUso: item.numeroPavimentoEmUso,
            Disponibilidade: item.disponibilidade,
            AtividadeDeFuncionamento: item.atividadeDeFuncionamento,
            GrauDeRisco: item.grauDeRisco,
            Laudo: item.laudo,
            Acessibilidade: item.acessibilidade,
            Pichacao: item.pichacao,
            Observacao: item.obsevacao,
            Observacao2: item.observacao,
            ProprietarioLocalizado: item.proprietarioLocalizado,
            Investimento: item.investimento,
            QualInvestimento: item.qualInvestimento,
            Tributacao: item.tributacao,
            AutorizacaoDeInformacao: item.autorizacaoDeInformacao,
            ProprietarioCartorio: item.proprietarioCartorio,
            ProprietarioCampo: item.proprietarioCampo,
            ContatoProprietario: item.contatoProprietario,
            UsoDoImovel: item.usoDoImovel,
            ValorDoAluguel: item.valorDoAluguel,
            ValorDeVenda: item.valorDeVenda,
            Latitude: item.latitude,
            Longitude: item.longitude,
            RGI: item.rgi,
            Planta: item.planta,
            PlantaRegional: item.plantaRegional,
            Judicializacao: item.judicializacao,
            DescricaoDaJudicializacao: item.descricaoJudicializacao,
            ProcessosAbertosDesde2018: item.ProcessoAberto2018,
            NumeroDaLicenca: item.nuLicenca,
            NumeroDoProcesso: item.nuProcesso,
            CoincidênciaProprietário: item.coincidenciaProprietario
          
          
          // Adicione outros campos conforme necessário
        }));
  
        setRealData(extractedData);
      } else {
        console.error('Backend data is not in an array format:', data);
      }
    } catch (error) {
      console.error('Error fetching data from the backend', error);
    }
  };

  useEffect(() => {
    fetchDataFromBackend(); // Chama a função para obter dados reais do backend
  }, []);

  const handleColRangeChange = (rangeNumber) => {
    setActiveButton(rangeNumber);
    const startId = rangeNumber * 10 - 9;
    const endId = startId + 9;
    // Não é mais necessário gerar dados fictícios aqui, pois você está usando dados reais
  };

  const handleTabChange = (rangeNumber) => {
    setColRange(rangeNumber);
  };

  const handleSearchInModal = (column) => {
     setSearchTerm(column);
    // Remove the line below that closes the modal on checkbox change
    // setIsModalOpen(false);
  };

  const toggleModal = () => {
    setIsModalOpen((prevIsOpen) => !prevIsOpen);
  };
  
  const filterColumns = (row) => {
    return displayedColumnNames.map((colName) => row[columnNames.indexOf(colName)]);
  };

  const filterData = (data) => {
    return data.filter((row) =>
      row.some(
        (cell, cellIndex) =>
          cell !== null &&
          (selectedColumns.length > 0
            ? selectedColumns.includes(columnNames[colRange * 10 + cellIndex])
            : true) &&
          cell.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

const startColIndex = colRange * 10;
const endColIndex = Math.min(startColIndex + 10, columnNames.length);

const displayedColumnNames = columnNames.slice(startColIndex, endColIndex);
const displayedData = realData.map(row => Object.values(row).slice(startColIndex, endColIndex));

  return (
    <>
      <Title darkMode={darkMode}>Registro de Imóveis</Title>

      <SearchAndTabContainer>
        <PopupButton onClick={toggleModal}>Filtros</PopupButton>

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

      <ModalContainer darkMode={darkMode} isOpen={isModalOpen}>
        <Title2 darkMode={darkMode}>Filtros</Title2>
        <ModalContent darkMode={darkMode}>
          <input
            type="text"
            placeholder="🔍 Pesquisar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            darkMode={darkMode}
          />
          {columnNames.map((colName, index) => (
            <label key={index} darkMode={darkMode}>
              <input
                darkMode={darkMode}
                type="checkbox"
                checked={selectedColumns.includes(colName)}
                onChange={() => handleSearchInModal(colName)}
              /> {colName}
            </label>
          ))}
        </ModalContent>
        <ButtonCloseContainer darkMode={darkMode}>
          <ButtonClose darkMode={darkMode} onClick={toggleModal}>
            <FaTimes />
          </ButtonClose>
        </ButtonCloseContainer>
      </ModalContainer>

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
          <ColumnRangeButton
            darkMode={darkMode}
            key={rangeNumber}
            isActive={activeButton === rangeNumber}
            onClick={() => handleColRangeChange(rangeNumber)}
          >
            {rangeNumber}
          </ColumnRangeButton>
        ))}
      </ButtonContainer>
    </>
  );
};

export default Tabela;