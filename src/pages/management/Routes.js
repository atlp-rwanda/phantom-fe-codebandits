import axios from '@utils/Api.js';
import React, { useEffect, useState } from 'react';
import TableSkeleton from '../../components/SkeletonUIs/TableSkeleton.js';
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
      {routes.length > 0 ? <RouteTable data={routes} /> : <TableSkeleton />}
    </div>
  );
};

export default Routes;
