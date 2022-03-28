import axios from '@utils/Api.js';
import React, { useEffect, useState } from 'react';
import RouteTable from '../routes/components/RouteTable.js';
const Routes = () => {
  const [routes, setroutes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/routes');
      setroutes(response.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <RouteTable data={routes} />
    </div>
  );
};

export default Routes;
