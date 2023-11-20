import React, { useState } from 'react';
import axios from 'axios';
import {
  Container,
  ProgressBar,
  Step,
  FormFields,
  FormField,
  FormActions,
  Button,
  Title2
} from './StyledTabela-adicionar';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const AdicionarImovelContainer = () => {
  const totalSteps = 6;
  const fieldsPerStep = 9;
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [fieldValues, setFieldValues] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (fieldName, value) => {
    setFieldValues({ ...fieldValues, [fieldName]: value });
  };

  const adicionarImovel = async () => {
    try {
      const response = await axios.post('API/imoveis', fieldValues);
      console.log(response.data);
      alert('Imóvel adicionado com sucesso!');
      navigate("/admin"); 
    } catch (e) {
      if (e.response) {
        console.error(`Erro ao adicionar imóvel: ${e.response.status}`);
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
      adicionarImovel();
    }
  };

  const prevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    } else if (currentStepIndex <= 0){
      navigate("/admin");
    }
  };

  const generateFormFields = () => {
    const fields = [];
    for (let i = 0; i < fieldsPerStep; i++) {
      const fieldNumber = currentStepIndex * fieldsPerStep + i + 1;
      fields.push(
        <FormField key={fieldNumber}>
          <label htmlFor={`field${fieldNumber}`}>Campo {fieldNumber}</label>
          <input
            type="text"
            id={`field${fieldNumber}`}
            placeholder={`Campo ${fieldNumber}`}
            value={fieldValues[`field${fieldNumber}`] || ''}
            onChange={(e) => handleInputChange(`field${fieldNumber}`, e.target.value)}
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

export default AdicionarImovelContainer;
