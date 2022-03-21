import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import routeDb from '../../database/routeDB.json';
import RouteComponent from './components/RouteComponent.js';

function RouteEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const data = routeDb.routes.find((d) => d.id == id);

  const editRoute = (destination1, destination2, distance) =>{
    const route = { destination1, destination2, distance};
    console.log(route);

    fetch("http://localhost:8000/routes/" + id, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(route)
    });
    toast('Route updated successfully', { type: 'success' });
     navigate(-1)
  }

  return(
      <RouteComponent formAction={editRoute} formTitle = 'Update Route' data={data}/>
  )

}

export default RouteEdit;
