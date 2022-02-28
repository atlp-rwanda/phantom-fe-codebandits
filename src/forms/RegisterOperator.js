import React, { useState } from 'react';
import { List } from 'react-content-loader';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ButtonA as Button } from '../components/Button.js';
import busMap from '../images/busMap.png';

export const LabelComponent = ({ name, htmlFor }) => {
  return (
    <label
      className="block text-grey-darker text-sm font-bold font-rale  mb-2"
      htmlFor={htmlFor}
    >
      {name}
    </label>
  );
};
export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function RegisterOperator() {
  let navigate = useNavigate();
  const [operator, setOperator] = useState(null);
  const [loading, setloading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onValid = (data) => {
    setloading(true);
    setOperator(operator);
    setTimeout(async () => {
      setloading(false);
      toast('The new operator has been added');
      navigate('/dashboard/operator');
    }, 3000);
  };
  

  const onErrors = () => {};

  const namePattern = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;

  const inpuStyles =
    'appearance-none border font-rale rounded w-full py-2 px-3 text-grey-darker bg-gray-200 text-md outline-hidden';

  return (
    <div className="font-sans antialiased bg-grey-lightest py-8  md:flex">
      <div className="mr-2 hidden lg:block md:w-1/2">
        <img
          src={busMap}
          alt=" Bus IMG"
          className=" h-50  w-full max-w-lg md:w-70 md:w-full lg:mx-auto lg:h-full"
        />
      </div>
      <div className="block bg-white rounded  p-2 w-full lg:max-w-3xl shadow-lg min-h-[70vh] ">
        <div className="py-4 px-8 text-black font-bold lg:px-4 md:px-4">
          <h1 className="text-center  text-2xl  font-rale font-bold md:ml-0 md:text-left">
            Register Operator
          </h1>
        </div>
        <div className="py-4 px-4  w-full  lg:mx-auto ">
          <div className="block mb-4 xl:flex md:grid md:grid-cols-2 md:gap-2">
            <div className="mr-1 xl:w-1/2 ">
              <Input
                type="text"
                name="FirstName"
                labelName="First Name"
                placeholder="Enter operator first name"
                id="firstName"
                value={formValues.FirstName}
                onChange={handleChange}
              />
              <p className="text-red-800">{formErrors.FirstName}</p>
            </div>

            <div className="ml-1 xl:w-1/2">
              <Input
                type="text"
                name="LastName"
                labelName="Last Name"
                placeholder="Enter operator last name"
                id="lastName"
                value={formValues.LastName}
                onChange={handleChange}
              />
              <p className="text-red-800">{formErrors.LastName}</p>
            </div>
          </div>
          <form onSubmit={handleSubmit(onValid, onErrors)}>
            <div className="py-4 px-4  w-full  lg:mx-auto ">
              <div className="block mb-4 xl:flex md:grid md:grid-cols-2 md:gap-2">
                <div className="mr-1 xl:w-1/2 ">
                  <div className="mb-2 block font-raleway">
                    <LabelComponent
                      htmlFor={'firstname'}
                      name={'First Name'}
                    ></LabelComponent>
                    <input
                      type="text"
                      name="FirstName"
                      className={inpuStyles}
                      placeholder="Ex: Yves"
                      id="firstName"
                      {...register('FirstName', {
                        required: 'First name is required',
                        pattern: {
                          value: namePattern,
                          message: 'Invalid firstname'
                        }
                      })}
                    />
                  </div>

                  <div className="block mb-4 xl:flex md:grid md:grid-cols-2  md:gap-2">
                    <div className="mr-1 xl:w-1/2">
                      <Input
                        type="text"
                        name="Email"
                        labelName="Email"
                        placeholder="Enter operator email"
                        id="email"
                        value={formValues.Email}
                        onChange={handleChange}
                      />
                      <p className="text-red-800">{formErrors.Email}</p>
                    </div>

                    <div className="ml-1 xl:w-1/2">
                      <div className="mb-2 block font-raleway">
                        <LabelComponent
                          htmlFor={'lastname'}
                          name={'Last Name'}
                        ></LabelComponent>
                      </div>
                      <input
                        type="text"
                        name="LastName"
                        className={inpuStyles}
                        placeholder="Hakuzimana"
                        id="lastName"
                        {...register('LastName', {
                          required: 'Last name is required',
                          pattern: {
                            value: namePattern,
                            message: 'Invalid last name'
                          }
                        })}
                      />
                      <p className="text-red-800">
                        {errors?.LastName && errors.LastName.message}
                      </p>
                    </div>
                  </div>

                  <div className="block mb-4 xl:flex md:grid md:grid-cols-2  md:gap-2">
                    <div className="mr-1 xl:w-1/2">
                      <label
                        htmlFor="company"
                        name="Company"
                        className="block text-grey-darker text-sm font-bold mb-2"
                      >
                        {' '}
                        company
                      </label>
                      <select
                        id="company"
                        placeholder="Select operator company"
                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker bg-gray-200"
                      >
                        <option className="text-grey-darker" hidden>
                          Select company
                        </option>
                        <option value="">Royal Express Limited </option>
                        <option value=""> City Express Limited </option>
                        <option value="">KIGALI BUS SERVICES</option>
                      </select>
                    </div>
                    <div className="ml-1 xl:w-1/2 ">
                      <Input
                        type="text"
                        name="Address"
                        labelName="Address"
                        placeholder="Enter operator working adress"
                        id="address"
                        value={formValues.Address}
                        onChange={handleChange}
                      />
                      <p className="text-red-800">{formErrors.Address}</p>
                    </div>
                  </div>
                  <p className="text-red-800">
                    {errors?.mobileNumber && errors.mobileNumber.message}
                  </p>
                </div>
              </div>

              <div className="block mb-4 xl:flex md:grid md:grid-cols-2  md:gap-2">
                <div className="mr-1 xl:w-1/2">
                  <label
                    htmlFor="company"
                    name="Company"
                    className="block text-grey-darker text-sm font-bold mb-2"
                  >
                    Company
                  </label>
                  <select
                    id="company"
                    placeholder="Select operator company"
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker bg-gray-200"
                    required
                  >
                    <option className="text-grey-darker">Select company</option>
                    <option value="">Royal Express Limited </option>
                    <option value=""> City Express Limited </option>
                    <option value="">KIGALI BUS SERVICES</option>
                  </select>
                </div>
                <div className="ml-1 xl:w-1/2 ">
                  <div className="mb-2 block font-raleway">
                    <LabelComponent
                      htmlFor={'address'}
                      name={'Address'}
                    ></LabelComponent>
                    <input
                      type="text"
                      name="address"
                      className={inpuStyles}
                      placeholder="Nyamirambo, Kigali"
                      id="address"
                      {...register('address', {
                        required: 'Address is required',
                        pattern: {
                          value: /^[A-Za-z][A-Za-z]{3,99}$/,
                          message: 'Invalid address'
                        }
                      })}
                    />
                  </div>

                  <p className="text-red-800">
                    {errors?.address && errors.address.message}
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <div className="w-full mr-3 flex flex-col">
                  <LabelComponent
                    htmlFor={'nationalId'}
                    name={'National ID'}
                  ></LabelComponent>
                  <input
                    type="text"
                    name="nationalid"
                    className={inpuStyles}
                    placeholder="1 1997 80020002 1 20"
                    id="nationalId"
                    {...register('nationalid', {
                      required: 'ID is required',
                      pattern: {
                        value: /^[1-3](19|20)\d{2}[7-8]\d{7}[0-9]\d{2}$/,
                        message: 'National Id must be 16 numbers and valid'
                      }
                    })}
                  />
                  <p className="text-red-800">
                    {' '}
                    {errors?.nationalid && errors.nationalid.message}
                  </p>
                </div>
              </div>
              <div className="flex justify-center align">
                {!loading && <Button name="Register Operator" type="submit" />}
                {loading && <Button name="Loading" type="submit" />}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterOperator;
