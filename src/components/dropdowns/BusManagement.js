import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const handleDelete = async (busId) => {
  try {
    await axios.delete(`http://localhost:8000/buses/${busId}`);
    toast('Bus deleted successfully', { type: 'success' });
  } catch (error) {
    toast('Error occured', { type: 'error' });
  }
};

const BusManagement = ({ row }) => {
  const navigate = useNavigate();
  const handleEdit = (busInfo) => {
    navigate(`bus/update/${busInfo.id}`, {
      state: busInfo
    });
  };

  const handleChange = (e) => {
    switch (e.target.value) {
      case 'edit':
        return handleEdit(row.original);
      case 'delete':
        return handleDelete(row.original.id);
    }
  };
  return (
    <div className="z-10">
      <select
        onChange={handleChange}
        role="select"
        name="busManagement"
        id=""
        className="py-1 px-3 font-rale font-bold bg-transparent border rounded-sm"
      >
        <option hidden={true}>Manage</option>
        <option className="cursor-pointer" value="edit">
          Edit
        </option>
        <option className="cursor-pointer" value="delete">
          Delete
        </option>
      </select>
    </div>
  );
};

export default BusManagement;
