import React from 'react';

import Input from '../components/Input.js';
import Button from '../components/Button.js';
import driverImg from '../images/driverImg.jpg';

function RegisterDrivers() {
  return (
    <div>
      <div className="font-sans antialiased bg-grey-lightest">
        <div className="w-full bg-grey-lightest">
          <div className="container mx-auto py-8 flex">
            <div className="border">
              <img
                src={driverImg}
                alt=" Bus IMG"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-5/6 lg:w-2/2 mx-auto bg-white rounded shadow p-8">
              <div className="py-4 px-8 text-black text-xl border border-grey-lighter">
                Register
              </div>
              <form action="">
                <div className="py-4 px-8">
                  <div className="flex mb-4">
                    <div className="w-1/2 mr-1">
                      <label
                        className="block text-grey-darker text-sm font-bold mb-2"
                        htmlFor="first_name"
                      >
                        First Name
                      </label>

                      <input
                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker bg-gray-200"
                        id="firstName"
                        type="text"
                        placeholder="Enter driver first name"
                      />
                    </div>
                    <div className="w-1/2 ml-1">
                      <label
                        className="block text-grey-darker text-sm font-bold mb-2"
                        htmlFor="last_name"
                      >
                        Last Name
                      </label>
                      <input
                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker bg-gray-200"
                        id="lastName"
                        type="text"
                        placeholder="Enter driver last name"
                      />
                    </div>
                  </div>

                  <div className="flex mb-4">
                    <div className="w-1/2 mr-1">
                      <label
                        className="block text-grey-darker text-sm font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker bg-gray-200"
                        id="email"
                        type="email"
                        placeholder="Enter driver email"
                      />
                    </div>
                    <div className="w-1/2 ml-1">
                      <label
                        className="block text-grey-darker text-sm font-bold mb-2"
                        htmlFor="mobile_number"
                      >
                        Mobile Number
                      </label>
                      <input
                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker bg-gray-200"
                        id="mobileNumber"
                        type="text"
                        placeholder="Enter mobile number"
                      />
                    </div>
                  </div>

                  <div className="flex mb-4">
                    <div className="w-1/2 mr-1">
                      <label
                        className="block text-grey-darker text-sm font-bold mb-2"
                        htmlFor="company"
                      >
                        Company
                      </label>
                      <select
                        name=""
                        id="company"
                        placeholder="Select driver company"
                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker bg-gray-200"
                      >
                        <option className="text-grey-darker">
                          Select company
                        </option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                      </select>
                    </div>
                    <div className="w-1/2 ml-1">
                      <label
                        className="block text-grey-darker text-sm font-bold mb-2"
                        htmlFor="address"
                      >
                        Address
                      </label>
                      <input
                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker bg-gray-200"
                        id="address"
                        type="text"
                        placeholder="Enter driver working adress"
                      />
                    </div>
                  </div>

                  <div className="flex mb-4">
                    <div className="w-1/2 mr-1">
                      <label
                        className="block text-grey-darker text-sm font-bold mb-2"
                        htmlFor="national_id"
                      >
                        National
                      </label>
                      <input
                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker bg-gray-200"
                        id="nationalId"
                        type="text"
                        placeholder="Enter driver national ID number "
                      />
                    </div>
                    <div className="w-1/2 ml-1">
                      <label
                        className="block text-grey-darker text-sm font-bold mb-2"
                        htmlFor="license"
                      >
                        {' '}
                        Driver License
                      </label>

                      <input
                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker bg-gray-200"
                        id="license"
                        type="text"
                        placeholder="Enter enter driver license number"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center align-center">
                  <Button
                    name="Register Driver"
                    type="submit"
                    styles="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl m-2 "
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterDrivers;
