import React from 'react';
import Buses from '../components/forms/Buses.js';

const RegisterBus = () => {
  return (
    <Buses
      formTitle="Register Bus"
      successToastMessage={'Bus registered successfully'}
    />
  );
};

export default RegisterBus;
