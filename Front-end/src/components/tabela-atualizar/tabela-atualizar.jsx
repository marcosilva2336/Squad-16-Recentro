import React, { useState } from 'react';
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

  const fieldNames = [
    "ID", "DSQFL", "DSQ", "Bairro", "Rua", "Número", "Tipo de Empreendimento", "Área Total", "Situação", "Restaurantes e Cafés",
    "Nome do Edifício", "Nº de Pavimentos em Uso", "Disponibilidade", "Atividade de Funcionamento", "Grau de Risco", "Laudo", "Acessibilidade",
    "Pichação", "Observações", "Proprietário Localizado", "Investimento", "Qual Investimento", "Tributação", "Autorização de Informação",
    "Proprietário Cartório", "Proprietário Campo", "Contato Proprietário", "Coincidência Proprietário", "Uso do Imóvel",
    "Valor do Aluguel", "Valor de Venda", "Latitude", "Longitude", "RGI", "Planta", "Planta Regional", "Judicialização",
    "Descrição da Judicialização", "Observações", "Processos Abertos Desde 2018", "Número da Licença", "Número do Processo"
  ];

  const handleInputChange = (fieldName, value) => {
    setFieldValues({ ...fieldValues, [fieldName]: value });
  };

  const nextStep = () => {
    if (currentStepIndex < totalSteps - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      alert('Imóvel Atualizado!!!');
    }
  };

  const prevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const generateFormFields = () => {
    const fields = [];
    const startIndex = currentStepIndex * fieldsPerStep;
    const endIndex = startIndex + fieldsPerStep;

    for (let i = startIndex; i < endIndex && i < fieldNames.length; i++) {
      const isIdField = fieldNames[i] === "ID";
      fields.push(
        <FormField key={fieldNames[i]}>
          <label htmlFor={`field${i}`}>{fieldNames[i]}</label>
          <input
            type="text"
            id={`field${i}`}
            placeholder={fieldNames[i]}
            value={fieldValues[fieldNames[i]] || ''}
            onChange={(e) => handleInputChange(fieldNames[i], e.target.value)}
            disabled={isIdField}
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
        <SearchInput placeholder="🔍 Pesquisar por ID..." />
      )}
      <Title2>Informações</Title2>
      <FormFields>
        {generateFormFields()}
      </FormFields>

      <FormActions>
        <Button className="cancel" onClick={() => setCurrentStepIndex(0)}>Cancelar</Button>
        <Button onClick={nextStep}>{currentStepIndex === totalSteps - 1 ? 'Finalizar' : 'Próximo'}</Button>
      </FormActions>
    </Container>
  );
};

export default AtualizarImovelContainer;
