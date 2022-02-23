import React from 'react';
import Button from '../components/Button.js';
import buses from '../images/buses.jpg'

function RegisterOperator() {
  return (
    <div>
      <div className="font-sans antialiased bg-grey-lightest">
        <div className="w-full bg-grey-lightest ">
          <div className="container mx-auto py-8 flex">
            <div className="border">
              <img src={buses} alt=" Bus IMG" className='w-full h-full object-cover' /> </div>

            <div className="w-5/6 lg:w-2/2 mx-auto bg-white rounded shadow p-8">
              <div className="py-4 px-8 text-black text-xl border border-grey-lighter">
                Register Operator
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
                        placeholder="Enter operator first name"
                      />
                    </div>
                    <div className="w-1/2 mr-1">
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
                        placeholder="Enter operator last name"
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
                        type="text"
                        placeholder="Enter operator email"
                      />
                    </div>
                    <div className="w-1/2 mr-1">
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
                        placeholder="Enter operator Mobile number"
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
                        placeholder='Select operator company'
                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker bg-gray-200"
                      >
                        <option className='text-grey-darker'>Select company</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                      </select>
                    </div>
                    <div className="w-1/2 mr-1">
                      <label
                        className="block text-grey-darker text-sm font-bold mb-2"
                        htmlFor="address"
                      >
                        Address
                      </label>

                      <input
                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker bg-gray-200"
                        id="firstName"
                        type="text"
                        placeholder="Enter operator working adress"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="w-full mr-1">
                      <label
                        className="block text-grey-darker text-sm font-bold mb-2"
                        htmlFor="nationalId"
                      >
                        National ID
                      </label>

                      <input
                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker bg-gray-200"
                        id="firstName"
                        type="text"
                        placeholder="Enter operator national ID number "
                      />
                    </div>
                  </div>

                  <div className="flex justify-center align">
                    <Button
                      name="Register Operator"
                      type="submit"
                      styles="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded-xl m-2 text-white"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterOperator;
