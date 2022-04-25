import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Buses from '../components/forms/Buses.js';
import { axiosBase as axios } from '../utils/Api.js';

const RegisterBus = () => {
  const navigate = useNavigate();
  const registerBusToDB = async (busInfo) => {
    try {
      await axios.post('/buses', busInfo);
      toast('Bus registered successfully', { type: 'success' });
      return;
    } catch (error) {
      return Promise.reject(error);
    }
  };
  return <Buses formTitle="Register Bus" formAction={registerBusToDB} />;
};

export default RegisterBus;
