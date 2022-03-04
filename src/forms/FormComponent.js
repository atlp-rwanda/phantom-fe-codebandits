import React, { useState } from 'react';
import { List } from 'react-content-loader';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ButtonA as Button } from '../components/Button.js';
import busMap from '../images/busMap.png';
import { LabelComponent } from './RegisterOperator.js';

export const FormComponent = ({ type, inputs, callback, redirect }) => {
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onValid = async (data) => {
    setloading(true);
    await callback(data).then(() => {
      setloading(false);
      navigate(redirect);
    });
  };
  const inpuStyles =
    'appearance-none border font-rale rounded w-full py-2 px-3 text-grey-darker bg-gray-200 text-md outline-hidden';

  return (
    <div className="font-sans antialiased bg-grey-lightest">
      <div className="w-full bg-grey-lightest ">
        <div className="py-8  md:flex">
          <div className="mr-2 hidden lg:block md:w-1/2">
            <img
              src={busMap}
              alt=" Bus IMG"
              className=" h-50  w-full max-w-lg md:w-70 md:w-full lg:mx-auto lg:h-full"
            />
          </div>
          <div className="block bg-white rounded  p-2 w-full lg:max-w-3xl shadow-lg min-h-[70vh] mr-4">
            {loading ? (
              <div className="flex items-center justify-center mx-auto h-full w-full">
                <List />
              </div>
            ) : (
              <>
                <div className="py-4 px-8 text-black font-bold lg:px-4 md:px-4 ">
                  <h1 className="text-center  text-2xl  font-rale font-bold md:ml-0 md:text-left">
                    {' '}
                    {type}
                  </h1>
                </div>
                <form onSubmit={handleSubmit(onValid)}>
                  <div className="py-4 px-4  w-full  lg:mx-auto ">
                    {inputs.map((input, index) => {
                      if (input.length > 1) {
                        return (
                          <div
                            className="block mb-4 xl:flex md:grid md:grid-cols-2 md:gap-2"
                            key={index}
                          >
                            {input.map((field) => {
                              if (field.type === 'select') {
                                return (
                                  <div
                                    className="mr-1 xl:w-1/2"
                                    key={field.name}
                                  >
                                    <label
                                      htmlFor={field.id}
                                      name={field.name}
                                      className="block text-grey-darker text-sm font-bold mb-2"
                                    >
                                      {field.labelName}
                                    </label>
                                    <select
                                      id={field.id}
                                      placeholder={field.placeholder}
                                      className="appearance-none border rounded w-full py-2 px-3 text-grey-darker bg-gray-200"
                                      required
                                    >
                                      {field.options.map((option, index) => {
                                        return (
                                          <option
                                            key={option.value || option.id}
                                            value={option.value}
                                            className="text-grey-darker"
                                            hidden={index === 0 ? true : false}
                                          >
                                            {' '}
                                            {option.name}{' '}
                                          </option>
                                        );
                                      })}
                                    </select>
                                  </div>
                                );
                              } else {
                                return (
                                  <div
                                    className="ml-1 xl:w-1/2 "
                                    key={field.id}
                                  >
                                    <div className="mb-2 block font-raleway">
                                      <LabelComponent
                                        htmlFor={field.id}
                                        name={field.labelName}
                                      ></LabelComponent>
                                      <input
                                        type={field.type || 'text'}
                                        name={field.name || field.id}
                                        className={inpuStyles}
                                        placeholder={
                                          field.placeholder || field.name
                                        }
                                        id={field.name}
                                        {...register(field.name, {
                                          required: `${field.name} is required`,
                                          pattern: {
                                            value: field.pattern,
                                            message: `${field.message}`
                                          }
                                        })}
                                      />
                                    </div>

                                    <p className="text-red-800">
                                      {errors &&
                                        errors[field.name] &&
                                        field.message}
                                    </p>
                                  </div>
                                );
                              }
                            })}
                          </div>
                        );
                      } else {
                        let field = input[0];
                        return (
                          <div className="mb-4" key={field.id}>
                            <div className="w-full mr-3 flex flex-col">
                              <LabelComponent
                                htmlFor={field.id}
                                name={field.labelName}
                              ></LabelComponent>
                              <input
                                type={field.type || 'text'}
                                name={field.name || field.id}
                                className={inpuStyles}
                                placeholder={field.placeholder || field.name}
                                id={field.name}
                                {...register(`${field.name}`, {
                                  required: `${field.name} is required`,
                                  pattern: {
                                    value: field.pattern,
                                    message: `${field.message}`
                                  }
                                })}
                              />

                              <p className="text-red-800">
                                {errors && errors[field.name] && field.message}
                              </p>
                            </div>
                          </div>
                        );
                      }
                    })}

                    <div className="flex justify-center align">
                      <Button name={type} type="submit" />
                    </div>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
