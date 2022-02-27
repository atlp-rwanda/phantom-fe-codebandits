<<<<<<< HEAD
import React, { useState } from 'react';
import Button from '../Button.js';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import busesDB from '../../database/busesDB.json';

const Buses = ({ formTitle, formAction }) => {
  const [plateNumber, setPlateNumber] = useState(null);
=======
import React from 'react';
import Button from '../Button.js';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Buses = ({ formTitle, successToastMessage }) => {
>>>>>>> 3737ce0 (Add the click outside functionality)
  const {
    register,
    handleSubmit,
    formState: { errors }
<<<<<<< HEAD
  } = useForm({
    reValidateMode: 'onChange',
    mode: 'onChange'
  });
  const onValid = async (data) => {
    const isBusInDB = busesDB.buses.filter((bus) => {
      return bus.plateNumber == data.plateNumber
    });
    console.log(isBusInDB)
    if (isBusInDB.length>0) {
      toast(`Bus with ${data.plateNumber} plate number is already registered`, {
        type: 'error'
      });
      return
    }
    await formAction(data);
  };

  const handlePlateNumber = (e) => {
    console.log(e.target.value);
=======
  } = useForm();
  const onValid = () => {
    toast({ successToastMessage }, { type: 'success' });
>>>>>>> 3737ce0 (Add the click outside functionality)
  };
  const inputClassStyles = 'rounded-sm px-3 py-3 mb-2 bg-[#EFEFEF]';
  return (
    <div className="px-8 py-4 my-auto font-raleway md:py-8">
      <form
        className="py-8 shadow-main px-4 flex flex-col w-full md:max-w-lg md:mx-auto"
        onSubmit={handleSubmit(onValid)}
      >
        <h1 className="font-extrabold text-2xl pb-8">{formTitle}</h1>
        <label htmlFor="busType" className="font-bold mb-2">
          Bus type
        </label>
        <select
          name="busType"
          id="busType"
<<<<<<< HEAD
          {...register('busType')}
          className={inputClassStyles}
        >
          <option hidden>Select bus type</option>
          <option value="Coaster">Coaster</option>
          <option value="Minibus">Minibus</option>
          <option value="Big Bus">Big Bus</option>
=======
          className={inputClassStyles}
          {...register('busType', {
            required: 'Bus type is required'
          })}
        >
          <option hidden>Select bus type</option>
          <option value="coaster">Coaster</option>
          <option value="minibus">Minibus</option>
          <option value="bigBus">Big Bus</option>
>>>>>>> 3737ce0 (Add the click outside functionality)
        </select>
        <p className="text-red-800">
          {errors?.busType && errors.busType.message}
        </p>
        <label htmlFor="busType" className="font-bold mb-2">
          Company
        </label>
<<<<<<< HEAD
        <select
          name="company"
          id="company"
          className={inputClassStyles}
          {...register('company')}
        >
          <option hidden>Select company</option>
          <option value="KBS">Kigali Bus Service</option>
          <option value="Royal_express">Royal Express</option>
          <option value="Virunga_express">Virunga Express</option>
=======
        <select name="company" id="busType" className={inputClassStyles}>
          <option hidden>Select company</option>
          <option value="kbs">Kigali Bus Service</option>
          <option value="royal_express">Royal Express</option>
          <option value="virunga_express">Virunga Express</option>
>>>>>>> 3737ce0 (Add the click outside functionality)
        </select>
        <label htmlFor="seats" className="font-bold mb-2">
          Seats
        </label>
        <input
          type="number"
          placeholder="Enter number of seats"
          className={inputClassStyles}
          name="seats"
          {...register('seats', {
            required: 'Number of seats is required',
            pattern: {
              value: /^\d*$/,
              message: 'Enter a valid number'
            }
          })}
        />
        <p className="text-red-800 mb-2">
          {errors?.seats && errors.seats.message}
        </p>
        <label htmlFor="seats" className="font-bold mb-2">
          Plate number
        </label>
        <input
          type="text"
          placeholder="Enter plate number"
          className={inputClassStyles}
          name="plateNumber"
          {...register('plateNumber', {
<<<<<<< HEAD
            onChange: handlePlateNumber,
            required: 'Bus plate number is required',
            pattern: {
              value: /^[A-Za-z0-9]*$/,
              message: 'Enter a valid plate number'
=======
            required: 'Bus plate number is required',
            pattern: {
              value: /^\d*$/,
              message: 'Enter a valid number'
>>>>>>> 3737ce0 (Add the click outside functionality)
            }
          })}
        />
        <p className="text-red-800 mb-2">
          {errors?.plateNumber && errors.plateNumber.message}
        </p>
        <div className="self-center">
          <Button
            name={formTitle}
            type="submit"
            styles="bg-primary text-sm text-white py-2 px-3 mt-4"
          />
        </div>
      </form>
    </div>
  );
};

export default Buses;
