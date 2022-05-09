import axios from '@utils/Api.js';
import React, { useEffect, useState } from 'react';
import BusManagement from './dropdowns/BusManagement.js';
import ManagementTable from './ManagementTable.js';
import TableSkeleton from './SkeletonUIs/TableSkeleton.js';
const DriverLink = ({ row }) => {
  if (row.driver) {
    return <div>{row.driver}</div>;
  }
  return <div className="text-red">No driver</div>;
};

const RouteLink = ({ row }) => {
  if (row.route) {
    return <div>{row.route}</div>;
  }
  return <div className="text-red">No route assigned</div>;
};

const busesTableColumns = [
  {
    Header: 'Plate number',
    accessor: 'plateNumber'
  },
  {
    Header: 'Bus type',
    accessor: 'busType'
  },
  {
    Header: 'Seats',
    accessor: 'seats'
  },
  {
    Header: 'Driver',
    Cell: ({ row }) => <DriverLink row={row.original} />
  },
  {
    Header: 'Route',
    Cell: ({ row }) => <RouteLink row={row.original} />
  },
  {
    Header: 'Management',
    Cell: ({ row }) => <BusManagement row={row} />
  }
];

const BusesTable = () => {
  const [buses, setbuses] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      const response = await axios.get('/buses');
      setbuses(response.data);
      setloading(false);
    };
    fetchData();
  }, []);
  return (
    <>
      {!loading ? (
        <ManagementTable
          tableColumns={busesTableColumns}
          data={buses}
          searchPlaceholder="Search buses..."
          registerNewPath="bus/register"
        />
      ) : (
        <TableSkeleton />
      )}
    </>
  );
};
export default BusesTable;
