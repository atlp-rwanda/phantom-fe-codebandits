import { FormComponent } from '@components/FormComponent.js';
import axios from '@utils/Api.js';
import React from 'react';
import { toast } from 'react-toastify';
import { driverInputs } from './FormInputs.js';

const registerDriverToDB = async (driverInfo) => {
  const defaultValues = { assigned_bus: null, assigned_route: null };
  const fullName = driverInfo.firstname + ' ' + driverInfo.lastname;
  delete driverInfo.firstname;
  delete driverInfo.lastname;
  const fullDriverInfo = JSON.stringify(
    Object.assign({}, driverInfo, { name: fullName }, defaultValues)
  );
  try {
    await axios.post('/drivers', fullDriverInfo);
    toast('Driver registered successful', { type: 'success' });
  } catch (error) {
    toast('error occured' + error.message, { type: 'error' });
    return;
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
