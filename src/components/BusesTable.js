import React from 'react';
import busesDB from '../database/busesDB.json';
import BusManagement from './dropdowns/BusManagement.js';
import ManagementTable from './ManagementTable.js';

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
  return (
    <ManagementTable
      tableColumns={busesTableColumns}
      database={busesDB.buses}
      searchPlaceholder="Search buses..."
      registerNewPath="bus/register"
    />
  );
};
export default BusesTable;
