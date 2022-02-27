<<<<<<< HEAD
import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalFilter, usePagination, useTable } from 'react-table';
import database from '../database/database.json';
import CheckRole from '../utils/CheckRoles.js';
import Button from './Button.js';
import ManageDropdown from './ManageDropdown.js';
import SearchFilter from './SearchFilter.js';

const LinkBus = ({ row }) => {
  const { assigned_bus } = row.original;
  if (assigned_bus)
    return (
      <Link className="text-primary" to="#buses">
        {assigned_bus}
      </Link>
    );

  return 'None';
};
=======
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalFilter, usePagination, useTable } from 'react-table';
import driversDB from '../database/driversDB.json';
import Button from './Button.js';
import ManageDropdown from './ManageDropdown.js';
import SearchFilter from './SearchFilter.js';
import CheckRole from './utils/CheckRoles.js';
>>>>>>> 753acfa (adds crud operations for buses)

const tableColumns = [
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
<<<<<<< HEAD
    accessor: 'assigned_bus',
    Cell: ({ row }) => <LinkBus row={row} />
=======
    accessor: 'assigned_bus'
  },
  {
    Header: 'Assigned Route',
    accessor: 'assigned_route'
>>>>>>> 753acfa (adds crud operations for buses)
  },
  {
    Header: 'Management',
    accessor: 'management',
<<<<<<< HEAD
    Cell: ({ row }) => <ManageDropdown row={row} />
=======
    Cell: ({ row }) => <ManageDropdown id={row.original.email} />
>>>>>>> 753acfa (adds crud operations for buses)
  }
];

const DriversTable = () => {
  const columns = useMemo(() => tableColumns, []);
<<<<<<< HEAD
  const data = useMemo(() => database.drivers, []);
=======
  const data = useMemo(() => driversDB, []);
>>>>>>> 753acfa (adds crud operations for buses)
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    pageOptions,
    state,
    setGlobalFilter
  } = useTable(
    {
      columns,
      data
    },
    useGlobalFilter,
    usePagination
  );
<<<<<<< HEAD
  const [open, setOpen] = useState(false);
=======
>>>>>>> 753acfa (adds crud operations for buses)

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
<<<<<<< HEAD
      <section className="flex justify-between content-center pb-7 overflow-x-auto">
        <SearchFilter filter={globalFilter} setfilter={setGlobalFilter} />
        <CheckRole
          children={
            <Link to="driver/register">
=======
      <section className="flex justify-between content-center pb-7">
        <SearchFilter
          filter={globalFilter}
          setfilter={setGlobalFilter}
          placeholder="Search Drivers..."
        />
        <CheckRole
          children={
            <Link to="/dashboard/driver/register">
>>>>>>> 753acfa (adds crud operations for buses)
              <Button
                name={'Register new'}
                styles={'bg-primary text-white py-1 text-xs'}
              />
            </Link>
          }
          role={['operator']}
        ></CheckRole>
      </section>
<<<<<<< HEAD
      <table
        {...getTableProps()}
        className="w-full overflow-x-scroll font-raleway"
      >
=======
      <table {...getTableProps()} className="w-full">
>>>>>>> 753acfa (adds crud operations for buses)
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
          {page.map((row) => {
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
<<<<<<< HEAD
      </table>
      <table className=" mt-3 flex justify-center w-full bg-gray-300 bg-opacity-20 ">
        <tfoot>
          <tr className="p-1 flex-row flex items-center justify-center my-2 mx-auto w-full font-raleway">
            <td colSpan={5}>
              <div className="w-full justify-center flex mx-auto flex-row items-center overflow-x-scroll">
                <button
                  className="mx-2 rounded-circle font-bold flex items-center justify-center bg-primary h-[30px] w-[60px] cursor-pointer"
                  onClick={() => gotoPage(0)}
                  disabled={!canPreviousPage}
                >
                  {'<|'}
                </button>{' '}
                <button
                  className="mx-2 font-bold font-raleway"
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                >
                  Prev
                </button>{' '}
                <button
                  onClick={() => nextPage()}
                  disabled={!canNextPage}
                  className="mx-2 font-bold font-raleway cursor-pointer"
=======
        <tfoot>
          <tr className="pagination mt-3 pt-3">
            <td colSpan={5}>
              <div className="w-full justify-end">
                <button
                  className="mr-2"
                  onClick={() => gotoPage(0)}
                  disabled={!canPreviousPage}
                >
                  {'<<'}
                </button>{' '}
                <button
                  className="mr-2"
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                >
                  Previous
                </button>{' '}
                <button
                  className="mr-2"
                  onClick={() => nextPage()}
                  disabled={!canNextPage}
>>>>>>> 753acfa (adds crud operations for buses)
                >
                  Next
                </button>{' '}
                <button
                  onClick={() => gotoPage(pageCount - 1)}
                  disabled={!canNextPage}
<<<<<<< HEAD
                  className="mx-2 rounded-circle font-bold flex items-center justify-center bg-primary h-[30px] w-[60px] cursor-pointer"
                >
                  {'|>'}
                </button>{' '}
                <div className="flex flex-row justify-center w-full">
                  <span className="inline-block mx-2">
                    Page{' '}
                    <strong>
                      {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                  </span>
                  <span className="inline-block mx-2">
                    | Go to page:{' '}
                    <input
                      type="number"
                      className=" pl-2 outline-none border rounded-md border-primary"
                      defaultValue={pageIndex + 1}
                      onChange={(e) => {
                        const pageNumber = e.target.value
                          ? Number(e.target.value) - 1
                          : 0;
                        gotoPage(pageNumber);
                      }}
                      style={{ width: '50px' }}
                    />
                  </span>{' '}
                  <select
                    className="px-1/2 md:px-2 font-raleway rounded-md border border-primary"
                    value={pageSize}
                    onChange={(e) => setPageSize(Number(e.target.value))}
                  >
                    {[10, 25, 50].map((pageSize) => (
                      <option key={pageSize} value={pageSize}>
                        Show {pageSize}
                      </option>
                    ))}
                  </select>
                </div>
=======
                >
                  {'>>'}
                </button>{' '}
                <span>
                  Page{' '}
                  <strong>
                    {pageIndex + 1} of {pageOptions.length}
                  </strong>{' '}
                </span>
                <span>
                  | Go to page:{' '}
                  <input
                    type="number"
                    defaultValue={pageIndex + 1}
                    onChange={(e) => {
                      const pageNumber = e.target.value
                        ? Number(e.target.value) - 1
                        : 0;
                      gotoPage(pageNumber);
                    }}
                    style={{ width: '50px' }}
                  />
                </span>{' '}
                <select
                  value={pageSize}
                  onChange={(e) => setPageSize(Number(e.target.value))}
                >
                  {[10, 25, 50].map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                      Show {pageSize}
                    </option>
                  ))}
                </select>
>>>>>>> 753acfa (adds crud operations for buses)
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default DriversTable;
