import React from 'react';
import { FormComponent } from '../../forms/FormComponent.js';
import { operatorInputs } from '../../forms/FormInputs.js';

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
