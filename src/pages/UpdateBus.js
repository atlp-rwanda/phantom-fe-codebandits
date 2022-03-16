import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Buses from '../components/forms/Buses.js';

const UpdateBus = () => {
  const location = useLocation();
  const { id, busType, plateNumber, company, seats } = location.state;
  const navigate = useNavigate();
  const updateBusInDB = async (newBusInfo) => {
    await fetch(`http://localhost:8000/buses/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBusInfo)
    });
    toast('Bus updated successfully', { type: 'success' });
    navigate(-1);
  };
  return (
    <Buses
      formTitle="Update bus"
      formAction={updateBusInDB}
      busType={busType}
      company={company}
      seats={seats}
      plateNumber={plateNumber}
    />
  );
};

export default UpdateBus;
