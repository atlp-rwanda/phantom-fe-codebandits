import axios from '@utils/Api.js';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Buses from '../components/forms/Buses.js';

const UpdateBus = () => {
  const location = useLocation();
  const { id, busType, plateNumber, company, seats } = location.state;
  const navigate = useNavigate();
  const updateBusInDB = async (newBusInfo) => {
    try {
      await axios.patch(`/buses/${id}`, newBusInfo);
      toast('Bus updated successfully', { type: 'success' });
      navigate(-1);
    } catch (error) {
      toast('Something went wrong', { type: 'error' });
    }
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
