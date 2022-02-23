import React from 'react';

import Input from '../components/Input.js';
import Button from '../components/Button.js';
import Label from '../components/Label.js';
import driverImg from '../images/driverImg.jpg';

function RegisterDrivers() {
  return (
    <div>
      <div className="font-sans antialiased bg-grey-lightest">
        <div className="w-full bg-grey-lightest">
          <div className="container mx-auto py-8 flex">
            <div className="border">
              <img   src={driverImg}   alt=" Bus IMG" className="w-full h-full object-cover"
              />
            </div>
            <div className="w-5/6 lg:w-2/2 mx-auto bg-white rounded shadow p-8">
              <div className="py-4 px-8 text-black text-xl border border-grey-lighter">
                Register Driver
              </div>
              <form action="">

                <div className="py-4 px-8">
                  <div className="flex mb-4">
                    <div className="w-1/2 mr-1">
                      <Label name="First Name" htmlFor="first_name" />
                      <Input type="text" placeholder="Enter driver first name" id="firstName" />
                     
                    </div>
                    <div className="w-1/2 ml-1">
                    <Label name="Last Name" htmlFor="last_name" />
                      <Input type="text" placeholder="Enter driver last name" id="lastName" />
                    </div>
                  </div>

                  <div className="flex mb-4">
                    <div className="w-1/2 mr-1">
                    <Label name="Email" htmlFor="email" />
                    <Input type="email" placeholder="Enter driver email" id="email" /> 
                    </div>
                    <div className="w-1/2 ml-1">
                    <Label name="Mobile Number" htmlFor="mobile_number" />
                    <Input type="text" placeholder="Enter mobile number" id="mobileNumber" />
                    </div>
                  </div>

                  <div className="flex mb-4">
                    <div className="w-1/2 mr-1">
                    <Label name="Company" htmlFor="company" />
                      <select name="" id="company" placeholder="Select driver company"
                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker bg-gray-200">
                        <option className="text-grey-darker"> Select company </option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                      </select>
                    </div>
                    <div className="w-1/2 ml-1">
                    <Label name="Address" htmlFor="address" />
                    <Input type="text" placeholder="Enter driver working adress" id="address" />       
                    </div>
                  </div>

                  <div className="flex mb-4">
                    <div className="w-1/2 mr-1">
                    <Label name="National Id" htmlFor="national_id" />
                    <Input type="text" placeholder="Enter driver national ID number" id="nationalId" />
                     
                    </div>
                    <div className="w-1/2 ml-1">
                    <Label name="Driver License" htmlFor="license" />
                     <Input type="text" placeholder="Enter enter driver license number" id="license" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center align-center">
                  <Button  name="Register Driver" type="submit"/>
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