import axios from '@utils/Api.js';
import React, { useEffect, useState } from 'react';
import TableSkeleton from '../../components/SkeletonUIs/TableSkeleton.js';
import RouteTable from '../routes/components/RouteTable.js';
const Routes = () => {
  const [routes, setroutes] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      const response = await axios.get('/routes');
      setroutes(response.data);
      setloading(false);
    };
    fetchData();
  }, []);
  return (
    <div>{!loading ? <RouteTable data={routes} /> : <TableSkeleton />}</div>
  );
};

export default Routes;
