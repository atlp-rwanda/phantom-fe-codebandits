import { FormComponent } from '@components/FormComponent.js';
import axios from '@utils/Api.js';
import React from 'react';
import { toast } from 'react-toastify';
import { driverInputs } from './FormInputs.js';

const registerDriverToDB = async (driverInfo) => {
  try {
    console.log(driverInfo);
    await axios.post('/drivers', driverInfo);
    toast('Driver registered successful', { type: 'success' });
    return response?.data;
  } catch (error) {
    console.log(error);
    toast(error?.response?.data?.message || error.message, { type: 'error' });
    throw error;
  }
};
function RegisterDriver() {
  return (
    <FormComponent
      inputs={driverInputs}
      redirect={'/dashboard/management'}
      callback={registerDriverToDB}
      type={'Register Driver'}
    />
  );
}

export default RegisterDriver;
