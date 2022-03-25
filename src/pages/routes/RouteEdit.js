import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from '@utils/Api.js';

import routeDb from '../../database/routeDB.json';
import RouteComponent from './components/RouteComponent.js';

const RouteEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const data = routeDb.routes.find((d) => d.id == id);

  const handleEdit = async (destination1, destination2, distance) => {
    const route = { destination1, destination2, distance };

    await axios.patch('/routes/' + id, route);

    toast('Route updated successfully', { type: 'success' });
    navigate(-1);
  };

  return (
    <RouteComponent
      formAction={handleEdit}
      formTitle="Update Route"
      data={data}
    />
  );
};

export default RouteEdit;
