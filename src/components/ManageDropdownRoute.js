import axios from '@utils/Api.js';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import CheckRole from '../utils/CheckRoles.js';
import { ButtonLoading } from './Button.js';

function ManageDropdownRoute({ row }) {
  const selectRef = useRef();
  const { id } = row;
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);

  const handleEdit = () => {
    navigate(`route/edit/${id}`, {
      state: {
        route: row
      }
    });
  };

  const handleView = () => {
    navigate(`/dashboard/modal/routes/view/${id}`, {
      state: {
        route: row
      }
    });
  };

  const handleDelete = async () => {
    setloading(true);
    try {
      await axios.delete(`/routes/${id}`);
      toast('Route Deleted successfully', { type: 'success' });
      navigate('/dashboard/management');
      setloading(false);

      if (selectRef.current) {
        console.log(selectRef.current);
        selectRef.current.innerHTML = `<b className="deleted mx-auto font-bold">Deleted</>`;
      }
    } catch (error) {
      toast('Something went wrong', { type: 'error' });
      setloading(false);
    }
  };

  const handleChange = (e) => {
    switch (e.target.value) {
      case 'view':
        handleView();
        break;
      case 'edit':
        handleEdit();
        break;
      case 'deleteRoute':
        handleDelete();
        break;
      default:
        break;
    }
  };

  return (
    <div className="z-10" ref={selectRef}>
      {loading ? (
        <ButtonLoading name={'Sending'} />
      ) : (
        <select
          role="select"
          onChange={handleChange}
          name=""
          id=""
          className="py-1 px-3 font-rale font-bold bg-transparent border rounded-sm"
        >
          <option hidden={true}> Manage </option>
          <option value="view"> View </option>
          <CheckRole
            children={
              <option className="cursor-pointer" value="edit">
                {' '}
                Edit{' '}
              </option>
            }
            role={['operator']}
          ></CheckRole>
          <CheckRole
            children={
              <option className="cursor-pointer" value="deleteRoute">
                {' '}
                Delete{' '}
              </option>
            }
            role={['operator']}
          ></CheckRole>{' '}
        </select>
      )}
    </div>
  );
}

export default ManageDropdownRoute;
