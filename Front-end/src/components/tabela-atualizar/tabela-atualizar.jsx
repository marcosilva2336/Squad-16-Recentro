import React, { useState } from 'react';
import {
  Container,
  ProgressBar,
  Step,
  FormFields,
  FormField,
  FormActions,
  Button,
  Title2
} from './StyledTabela-atualizar';
import { FaArrowLeft } from 'react-icons/fa';

const AtualizarImovelContainer = () => {
  const totalSteps = 6;
  const fieldsPerStep = 9;
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [fieldValues, setFieldValues] = useState({});

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

export default AtualizarImovelContainer;
