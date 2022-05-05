import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { axiosBase as axios } from '../../utils/Api.js';
import RouteComponent from './components/RouteComponent.js';

function RegisterRoute() {
  const navigate = useNavigate();
  const registerRouteToDB = async (origin, destination, distance) => {
    if (origin === null || destination === null) {
      toast('Make sure all destinations are selected', { type: 'error' });
      return;
    }
    const routeInfo = { origin, destination, distance };
    try {
      console.log(routeInfo);
      await axios.post('/routes', routeInfo);
      toast('Route Created successfully', { type: 'success' });
      return;
    } catch (error) {
      return Promise.reject(error);
    }
  };
  return (
    <RouteComponent formAction={registerRouteToDB} formTitle="Register Route" />
  );
}

export default RegisterRoute;
