import axios from '@utils/Api.js';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ButtonLoading } from '../Button.js';

busType: "Minibus"
company: "KBS"
driver: null
id: 5
plateNumber: "RAT230A"
route: null
seats: "50"

const BusManagement = ({ row }) => {
  const { plateNumber, busType, seats, driver, route, company, id } = row.original;
  const data = {
    plateNumber,
    busType,
    seats,
    driver,
    route,
    company,
    id
  };
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const handleEdit = (busInfo) => {
    navigate(`bus/update/${busInfo.id}`, {
      state: busInfo
    });
  };
  const selectRef = useRef();
  const handleDelete = async (busId) => {
    setloading(true);
    try {
      await axios.delete(`/buses/${busId}`);
      toast('Bus deleted successfully', { type: 'success' });
      setloading(false);
      selectRef.current.innerHTML = `<b className="deleted mx-auto font-bold">Deleted</>`;
    } catch (error) {
      toast('Error occured', { type: 'error' });
      setloading(false);
    }
  };
  const handleAssignRoute = (busInfo) => {
    navigate(`/dashboard/modal/bus/assign/${plateNumber}`, {
      state: data
    });
  }

  const handleChange = (e) => {
    switch (e.target.value) {
      case 'edit':
        return handleEdit(row.original);
      case 'delete':
        return handleDelete(row.original.id);
      case 'assign_route':
        return handleAssignRoute(row.original);
    }
  };
  return (
    <div className="z-10" ref={selectRef}>
      {loading ? (
        <ButtonLoading name={'Sending'} />
      ) : (
        <select
          onChange={handleChange}
          role="select"
          name="busManagement"
          id=""
          className="py-1 px-3 font-rale font-bold bg-transparent border rounded-sm"
        >
          <option hidden={true}>Manage</option>
          <option className="cursor-pointer" value="assign_route">
            Assign Route
          </option>
          <option className="cursor-pointer" value="edit">
            Edit
          </option>
          <option className="cursor-pointer" value="delete">
            Delete
          </option>
        </select>
      )}
    </div>
  );
};

export default BusManagement;
