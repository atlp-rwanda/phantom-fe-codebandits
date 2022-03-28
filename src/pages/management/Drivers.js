import axios from '@utils/Api.js';
import React, { useEffect, useState } from 'react';
import TableSkeleton from '../../components/SkeletonUIs/TableSkeleton.js';

const DriversTable = React.lazy(() =>
  import('../../components/DriversTable.js')
);

const Drivers = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/drivers');
      setdata(response.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      {data.length > 0 ? <DriversTable data={data} /> : <TableSkeleton />}
    </div>
  );
};

export default Drivers;
