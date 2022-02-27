import React from 'react';
import Buses from '../components/forms/Buses.js';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const RegisterBus = () => {
  const navigate = useNavigate();
  const registerBusToDB = (busInfo) => {
    const defaultValues = { driver: 'No driver', route: 'No route' };
    fetch('http://localhost:8000/buses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(Object.assign({}, busInfo, defaultValues))
    }).then((res) => {
      res.json();
      toast('Bus registered successfully');
      navigate('/dashboard/management');
    });
  };
  return (
    <Buses
      formTitle="Register Bus"
      successToastMessage={'Bus registered successfully'}
      formAction={registerBusToDB}
    />
  );
};

export default RegisterBus;
