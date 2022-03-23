import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import CheckRole from '../utils/CheckRoles.js';

function ManageDropdownRoute({ row }) {
  const { id } = row;
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`route/edit/${id}`, {
      state: {
        route: row
      }
    });
  };

  const handleView = () => {
    toast('View selected route');
    navigate(`/dashboard/modal/routes/view/${id}`, {
      state: {
        route: row
      }
    });
  };

  const handleDelete = async () => {
    await axios.delete(`http://localhost:8000/routes/${id}`);

    toast('Route Deleted successfully', { type: 'success' });
    navigate('/dashboard/management');
  };

  const handleChange = (e) => {
    switch (e.target.value) {
      case 'view':
        handleView();
        break;
      case 'edit':
        handleEdit();
        break;
      case 'delete':
        handleDelete();
        break;
      default:
        break;
    }
  };

  return (
    <div className="z-10">
      <select
        role="select"
        onChange={handleChange}
        name=""
        id=""
        className="py-1 px-3 font-rale font-bold bg-transparent border rounded-sm"
      >
        <option hidden={true}> Manage </option>
        <option value="view" onClick={handleView}>
          {' '}
          View{' '}
        </option>
        <CheckRole
          children={
            <option
              className="cursor-pointer"
              value="edit"
              onClick={handleEdit}
            >
              {' '}
              Edit{' '}
            </option>
          }
          role={['operator']}
        ></CheckRole>
        <CheckRole
          children={
            <option
              className="cursor-pointer"
              value="delete"
              onClick={handleDelete}
            >
              {' '}
              Delete{' '}
            </option>
          }
          role={['operator']}
        ></CheckRole>{' '}
      </select>{' '}
    </div>
  );
}

export default ManageDropdownRoute;
