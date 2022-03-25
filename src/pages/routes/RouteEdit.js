import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

import routeDb from '../../database/routeDB.json';
import RouteComponent from './components/RouteComponent.js';

const RouteEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const data = routeDb.routes.find((d) => d.id == id);

  const handleEdit = async (destination1, destination2, distance) => {
    const route = { destination1, destination2, distance };
    console.log(route);

    await axios.patch('http://localhost:8000/routes/' + id, route);

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
