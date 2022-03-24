import FormComponent from '@components/FormComponent.js';
import { operatorInputs } from '@pages/forms/FormInputs.js';
import React from 'react';

function RegisterOperator() {
  const handleReg = async (data) => {
    return new Promise((resolve) => {
      setTimeout(resolve, 3000);
    });
  };
  return (
    <FormComponent
      inputs={operatorInputs}
      type={'Register Operator'}
      callback={handleReg}
      redirect={'/dashboard/operator'}
    ></FormComponent>
  );
}

export default RegisterOperator;
