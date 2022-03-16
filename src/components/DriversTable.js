import React from 'react';

import driversDB from '../database/driversDB.json';
import DriversManagement from './dropdowns/DriverManagement.js';
import ManagementTable from './ManagementTable.js';

const driversTableColumns = [
  {
    Header: 'Names',
    accessor: 'name'
  },
  {
    Header: 'Email',
    accessor: 'email'
  },
  {
    Header: 'License',
    accessor: 'license'
  },
  {
    Header: 'Assigned Bus',
    accessor: 'assigned_bus'
  },
  {
    Header: 'Assigned Route',
    accessor: 'assigned_route'
  },
  {
    Header: 'Management',
    Cell: ({ row }) => <DriversManagement id={row.original.plateNumber} />
  }
];

const DriversTable = () => {
  return (
    <ManagementTable
      tableColumns={driversTableColumns}
      database={driversDB}
      searchPlaceholder="Search drivers..."
      registerNewPath="/dashboard/driver/register"
    />
  );
};

export default DriversTable;
