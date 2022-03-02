import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalFilter, usePagination, useTable } from 'react-table';
import routeDB from '../database/routesDb.json';
import COLUMNS from './Columns.js';
import Button from './Button.js';
import ManageDropdown from './ManageDropdown.js';
import SearchFilter from './SearchFilter.js';
// import CheckRole from '../utils/CheckRoles.js';

const OperatorManagment = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => routeDB, []);

 
  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow,  state, setGlobalFilter} = useTable(
    {
      columns,
      data
    },
    useGlobalFilter
  );
   const { globalFilter } = state;

  return (
    <>
    <section className="flex justify-between content-center pb-7">
      <SearchFilter filter={globalFilter} setfilter={setGlobalFilter} />
      <Link to="/dashboard/driver/register">
              <Button
                name={'Register new'}
                styles={'bg-primary text-white py-1 text-xs'}
              />
            </Link>
    </section>
    <table {...getTableProps()} className="w-full">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()} className="pb-10 ">
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                className="text-left font-extrabold pr-5 border-b-2 pb-4"
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    className="pr-5 py-4 border-b-2"
                  >
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  </>
  );
};

export default OperatorManagment;
