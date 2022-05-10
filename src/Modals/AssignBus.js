import { ButtonLoading, PrimaryButton } from '@components/Button.js';
import axios from '@utils/Api.js';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

export const assignBusToDriver = async (busInfo, driverInfo) => {
  await axios.patch('/buses/' + busInfo.id, { driver: driverInfo.name });
  await axios.patch('/drivers/' + driverInfo.id, {
    assigned_bus: busInfo.plateNumber
  });
};

/* istanbul ignore next */
export const AssignBusModal = ({ handleClose }) => {
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const location = useLocation();
  const [createButton, setCreateButton] = useState({
    open: false,
    plate: null
  });
  const { register, handleSubmit } = useForm();
  const { name, email, license, plate, id } = location?.state;
  const onSubmit = async (data) => {
    const inputPlate = data.plate.toUpperCase();
    try {
      setloading(true);
      const response = await axios.get('/buses/', {
        params: { plateNumber: inputPlate }
      });
      const bus = response.data[0];
      if (bus) {
        setCreateButton({ open: false, plate: null });
        if (bus.driver) {
          Swal.fire({
            title: 'Are you sure?',
            text: 'This bus already have a driver!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, change!'
          }).then(async (result) => {
            if (result.isConfirmed) {
              await assignBusToDriver(bus, location.state);
              const response = await axios.get('/drivers/', {
                params: { assigned_bus: bus.plateNumber }
              });
              const driver = response.data[0];
              await axios.patch('/drivers/' + driver.id, {
                assigned_bus: null
              });
              Swal.fire(
                'Changed!',
                'The bus has been assigned a new driver.',
                'success'
              );
            }
          });
        } else {
          await assignBusToDriver(bus, location.state);
          toast('New driver assigned successfully', { type: 'success' });
          navigate('/dashboard/management');
        }
      } else {
        toast('Bus was not found', { type: 'error' });
        setCreateButton({ open: true, plate: inputPlate });
      }
    } catch (error) {
      toast('Something went wrong on our end');
    } finally {
      setloading(false);
    }
  };

  return (
    <div className="font-raleway w-fit px-8 py-2">
      <h1 className="font-bold">Driver Info</h1>
      <hr />
      <ul>
        <li>
          <span>Name: </span>
          <b>{name}</b>
        </li>
        <li>
          <span>Email: </span>
          <b>{email}</b>
        </li>
        <li>
          <span>License: </span>
          <b>{license}</b>
        </li>
        <li>
          <span>Assigned bus: </span>
          <b>{plate}</b>
        </li>
      </ul>
      <hr />
      <div>
        <form
          id="assign-form"
          action="#23"
          className="py-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="bus" className="block font-raleway">
            Bus plate number:{' '}
          </label>
          <input
            className="bg-gray-300 my-2 border px-2 py-1 rounded-sm placeholder:font-raleway uppercase"
            required
            type="text"
            id="bus-plate"
            name="plate"
            placeholder="RAB1000"
            {...register('plate', {
              required: 'A plate number is required'
            })}
          />
          {loading ? (
            <ButtonLoading name={'Searching...'} />
          ) : (
            <PrimaryButton type={'submit'} name={'Search'}></PrimaryButton>
          )}

          <div>
            {createButton.open ? (
              <div className="pt-3">
                <div className="font-raleway">
                  Bus with {createButton.plate} was not found
                </div>
                <Link to="/dashboard/management/bus/register">
                  <PrimaryButton name={`Create new "${createButton.plate}"`} />
                </Link>
              </div>
            ) : (
              ''
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
export default AssignBusModal;
