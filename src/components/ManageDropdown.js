import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function ManageDropdown({ row }) {
  const navigate = useNavigate();
  const handleEdit = () => {
    const { id, busType, company, seats, plateNumber } = row.original;
    navigate('/dashboard/management/bus/update/' + id, {
      state: {
        id: id,
        busType: busType,
        company: company,
        seats: seats,
        plateNumber: plateNumber
      }
    });
  };
  const handleDelete = async () => {
    await fetch('http://localhost:8000/buses/' + row.original.id, {
      method: 'DELETE'
    });
    toast('bus deleted successfully', { type: 'success' });
  };
  
  const handleChange = (e) => {
    switch (e.target.value) {
      case 'edit':
        return handleEdit();
      case 'delete':
        return handleDelete();
      default:
        toast('Changed');
        break;
    }
  };
  return (
    <div className="z-10">
      <select
        onChange={handleChange}
        name=""
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
        <option className="cursor-pointer" value="">
          Permissions
        </option>
      </select>
    </div>
  );
}

export default ManageDropdown;
