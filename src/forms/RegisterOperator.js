import React from 'react';
import { FormComponent } from './FormComponent.js';
import { operatorInputs } from './FormInputs.js';

export const LabelComponent = ({ name, htmlFor }) => {
  return (
    <label
      className="block text-grey-darker text-sm font-bold font-rale  mb-2"
      htmlFor={htmlFor}
    >
      {name}
    </label>
  );
};
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
