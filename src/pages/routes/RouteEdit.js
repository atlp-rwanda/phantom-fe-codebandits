import axios from '@utils/Api.js';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import RouteComponent from './components/RouteComponent.js';

const RouteEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleEdit = async (destination1, destination2, distance) => {
    const route = { destination1, destination2, distance };

    await axios.patch('/routes/' + id, route);

    toast('Route updated successfully', { type: 'success' });
    navigate(-1);
  };
  const [data, setdata] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/routes/' + id);
      setdata(response.data);
    };
    fetchData();
  }, []);

  return (
    <RouteComponent
      formAction={handleEdit}
      formTitle="Update Route"
      data={data}
    />
  );
};

export default RouteEdit;
