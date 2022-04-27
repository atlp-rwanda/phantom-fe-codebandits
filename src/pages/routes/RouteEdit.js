import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { axiosBase as axios } from '../../utils/Api.js';
import RouteComponent from './components/RouteComponent.js';

const RouteEdit = () => {
  const location = useLocation();
  const routeInfo = location.state?.route;
  const { id } = useParams();
  const handleEdit = async (destination1, destination2, distance) => {
    try {
      const route = { destination1, destination2, distance };
      await axios.put(`/routes/${id}`, route);
      toast('Route updated successfully', { type: 'success' });
      return;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  return (
    <RouteComponent
      formAction={handleEdit}
      formTitle="Update Route"
      data={routeInfo}
    />
  );
};

export default RouteEdit;
