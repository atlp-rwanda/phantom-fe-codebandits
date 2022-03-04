import React from 'react';
import { toast } from 'react-toastify';
import { FormComponent } from './FormComponent.js';
import { driverInputs } from './FormInputs.js';
import { sleep } from './RegisterOperator.js';

function RegisterDriver() {
  const handleDriver = async (data) => {
    await sleep(3000).then(() => {
      toast('The new driver has been added');
    });
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