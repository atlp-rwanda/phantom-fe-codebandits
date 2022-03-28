import axios from '@utils/Api.js';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Buses from '../components/forms/Buses.js';
import busesDB from '../database/busesDB.json';

const RegisterBus = () => {
  const navigate = useNavigate();

  const registerBusToDB = async (busInfo) => {
    const busInDb = busesDB.buses.filter((bus) => {
      return bus.plateNumber === busInfo.plateNumber;
    });
    if (busInDb.length > 0) {
      toast(
        `Bus with ${busInfo.plateNumber} plate number is already registered`,
        {
          type: 'error'
        }
      );
      return;
    }
    const defaultValues = { driver: null, route: null };
    await axios.post('/buses', {
      ...busInfo,
      ...defaultValues
    });
    toast('Bus registered successfully', { type: 'success' });
    navigate(-1);
  };
  return <Buses formTitle="Register Bus" formAction={registerBusToDB} />;
};

export default RegisterBus;
