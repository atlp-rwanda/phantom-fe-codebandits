import React from 'react';
import Buses from '../components/forms/Buses.js';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import busesDB from '../database/busesDB.json';

const RegisterBus = () => {
  const navigate = useNavigate();
  const registerBusToDB = async (busInfo) => {
    const busInDb = busesDB.buses.filter((bus) => {
      return bus.plateNumber == busInfo.plateNumber;
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
    const defaultValues = { driver: 'No driver', route: 'No route' };
    await fetch('http://localhost:8000/buses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.assign({}, busInfo, defaultValues))
    });
    toast('Bus registered successfully', { type: 'success' });
    navigate(-1);
  };
  return <Buses formTitle="Register Bus" formAction={registerBusToDB} />;
};

export default RegisterBus;
