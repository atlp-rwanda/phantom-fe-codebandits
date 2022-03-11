import React from 'react';
import { toast } from 'react-toastify';
import sleep from '../utils/sleep.js';
import { FormComponent } from './FormComponent.js';
import { driverInputs } from './FormInputs.js';

function RegisterDriver() {
  const handleDriver = async (data) => {
    return new Promise(resolve=>{
      setTimeout(resolve, 3000)
    })
  };

  return (
    <FormComponent
      inputs={driverInputs}
      redirect={'/dashboard/driver'}
      callback={handleDriver}
      type={'Register Driver'}
    ></FormComponent>
  );
}

export default RegisterDriver;
