import React from 'react';
import { toast } from 'react-toastify';
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
export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function RegisterOperator() {
  const handleReg = async (data) => {
    return await sleep(3000).then((response) => {
      console.log('Data sent');
      toast(`A new operator with name ${data.firstname}`);
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