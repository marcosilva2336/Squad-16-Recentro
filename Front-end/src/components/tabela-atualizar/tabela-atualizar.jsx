import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  ProgressBar,
  Step,
  FormFields,
  FormField,
  FormActions,
  Button,
  SearchInput,
  Title2
} from './StyledTabela-atualizar';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const AtualizarImovelContainer = () => {
  const navigate = useNavigate();
  const totalSteps = 7;
  const fieldsPerStep = 6;
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [fieldValues, setFieldValues] = useState({});
  const [searchId, setSearchId] = useState('');

  const fieldNames = [
    "ID", "DSQFL", "DSQ", "Bairro", "Rua", "Número", "Tipo de Empreendimento", "Área Total", "Situação", "Restaurantes e Cafés",
    "Nome do Edifício", "Nº de Pavimentos em Uso", "Disponibilidade", "Atividade de Funcionamento", "Grau de Risco", "Laudo", "Acessibilidade",
    "Pichação", "Observações", "Proprietário Localizado", "Investimento", "Qual Investimento", "Tributação", "Autorização de Informação",
    "Proprietário Cartório", "Proprietário Campo", "Contato Proprietário", "Coincidência Proprietário", "Uso do Imóvel",
    "Valor do Aluguel", "Valor de Venda", "Latitude", "Longitude", "RGI", "Planta", "Planta Regional", "Judicialização",
    "Descrição da Judicialização", "Observações", "Processos Abertos Desde 2018", "Número da Licença", "Número do Processo"
  ];

  useEffect(() => {
    const buscarImovelPorId = async () => {
      if (!searchId) return;

      try {
        const response = await axios.get(`API/imoveis/${searchId}`);
        setFieldValues(response.data);
      } catch (e) {
        console.error("Erro ao buscar imóvel: ", e);
      }
    };

    buscarImovelPorId();
  }, [searchId]);

  const handleInputChange = (fieldName, value) => {
    setFieldValues({ ...fieldValues, [fieldName]: value });
  };

  const atualizarImovel = async () => {
    try {
      const response = await axios.put(`API/imoveis/${fieldValues.ID}`, fieldValues);
      console.log(response.data); 
      alert('Imóvel atualizado com sucesso!');
    } catch (e) {
      if (e.response) {
        console.error(`Erro ao atualizar imóvel: ${e.response.status}`);
      } else if (e.request) {
        console.error("A requisição foi feita mas não houve resposta: ", e.request);
      } else {
        console.error("Erro: ", e.message);
      }
    }
  };

  const nextStep = () => {
    if (currentStepIndex < totalSteps - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      atualizarImovel();
    }
  };

  const prevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    } else if (currentStepIndex <= 0) {
      navigate("/admin");
    }
  };

  const resetAndGoToFirstStep = () => {
    setFieldValues({});
    setCurrentStepIndex(0);
  };

  const generateFormFields = () => {
    const fields = [];
    const startIndex = currentStepIndex * fieldsPerStep;
    const endIndex = startIndex + fieldsPerStep;

    for (let i = startIndex; i < endIndex && i < fieldNames.length; i++) {
      fields.push(
        <FormField key={fieldNames[i]}>
          <label htmlFor={`field${i}`}>{fieldNames[i]}</label>
          <input
            type="text"
            id={`field${i}`}
            placeholder={fieldNames[i]}
            value={fieldValues[fieldNames[i]] || ''}
            onChange={(e) => handleInputChange(fieldNames[i], e.target.value)}
            disabled={fieldNames[i] === "ID"}
          />
        </FormField>
      );
    }
    return fields;
  };

  return (
    <Container>
      <FaArrowLeft onClick={prevStep} />
      <ProgressBar>
        {[...Array(totalSteps)].map((_, index) => (
          <Step key={index} active={index === currentStepIndex} data-step={index + 1} />
        ))}
      </ProgressBar>
      {currentStepIndex === 0 && (
        <SearchInput
          placeholder="🔍 Pesquisar por ID..."
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
      )}
      <Title2>Informações</Title2>
      <FormFields>
        {generateFormFields()}
      </FormFields>
      <FormActions>
        <Button className="cancel" onClick={resetAndGoToFirstStep}>Redefinir</Button>
        <Button onClick={nextStep}>{currentStepIndex === totalSteps - 1 ? 'Finalizar' : 'Próximo'}</Button>
      </FormActions>
    </Container>
  );
};

export default AtualizarImovelContainer;