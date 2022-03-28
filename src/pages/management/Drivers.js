import axios from '@utils/Api.js';
import React, { useEffect, useState } from 'react';
import DriversTable from '../../components/DriversTable.js';


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
      <DriversTable data={data} />
    </div>
  );
};

export default Drivers;
