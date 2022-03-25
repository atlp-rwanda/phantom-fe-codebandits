import React, { useState } from 'react';
import { List } from 'react-content-loader';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ButtonA as Button } from '../components/Button.js';
import busMap from '../images/busMap.png';
import LabelComponent from '../components/LabelComponent.js';



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
    <div>
      <div className="font-sans antialiased bg-grey-lightest">
        <div className="w-full bg-grey-lightest ">
          <div className="py-8  md:flex">
          
            <div className="block bg-white rounded  p-2 w-full lg:max-w-3xl shadow-lg min-h-[70vh] ">
              {loading ? (
                <div className="flex items-center justify-center mx-auto h-full w-full">
                  <List />
                </div>
              ) : (
                <>
                  <div className="py-4 px-8 text-black font-bold lg:px-4 md:px-4">
                    <h1 className="text-center  text-2xl  font-rale font-bold md:ml-0 md:text-left">
                      Register Operator
                    </h1>
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

                          <p className="text-red-800">
                            {errors?.FirstName && errors.FirstName.message}
                          </p>
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
                          <div className="mb-2 block font-raleway">
                            <LabelComponent
                              htmlFor={'email'}
                              name={'Email'}
                            ></LabelComponent>
                            <input
                              type="email"
                              name="email"
                              className={inpuStyles}
                              placeholder="Ex: example@provider.com"
                              id="email"
                              {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                  value:
                                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                  message: 'Invalid email address'
                                }
                              })}
                            />
                          </div>

                          <p className="text-red-800">
                            {errors?.email && errors.email.message}
                          </p>
                        </div>

                        <div className="ml-1 xl:w-1/2">
                          <div className="mb-2 block font-raleway">
                            <LabelComponent
                              htmlFor={'mobileNumber'}
                              name={'Mobile Number'}
                            ></LabelComponent>
                            <input
                              type="text"
                              name="mobileNumber"
                              className={inpuStyles}
                              placeholder="0789000000"
                              id="mobileNumber"
                              {...register('mobileNumber', {
                                required: 'Mobile number is required',
                                pattern: {
                                  value: /(0|7|8)\d{9}$/,
                                  message: 'Invalid mobile number'
                                }
                              })}
                            />
                          </div>

                          <p className="text-red-800">
                            {errors?.mobileNumber &&
                              errors.mobileNumber.message}
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
                            <option className="text-grey-darker" hidden>
                              Select company
                            </option>
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
                              placeholder="Cell, Sector, District"
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
                                value:
                                  /^[1-3](19|20)\d{2}[7-8]\d{7}[0-9]\d{2}$/,
                                message:
                                  'National Id must be 16 numbers and valid'
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
                        <Button name="Register Operator" type="submit" />
                      </div>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterOperator;
