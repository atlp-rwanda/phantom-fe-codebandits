import React, {useState } from 'react';
import Button from '../components/Button.js';
import buses from '../images/buses.jpg'
import Input from '../components/Input.js';
import Label from '../components/Label.js';
import { validateOperator } from '../components/Input.js';

function RegisterOperator() {

 
const onSubmit = (e) => {
  e.preventDefault();
  const Data = new FormData(e.target);
  console.log(Data.entries());
};

const operatorFormElements = [
  {
    name: this.name,
    placeholder: this.placeholder,
    type: this.type,
    onchange: validateOperator

  }
]


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

              <form onSubmit={onSubmit}>
                <div className="py-4 px-8">
                  <div className="flex mb-4">
                    <div className="w-1/2 mr-1">
                    <Label name="First Name" htmlFor="first_name" />
                    <Input type="text" placeholder="Enter operator first name" id="firstName" />
                    </div>

                    <div className="w-1/2 mr-1">
                    <Label name="Last Name" htmlFor="last_name" />
                    <Input type="text" placeholder="Enter operator last name" id="lastName" />
                    </div>
                  </div>

                  <div className="flex mb-4">
                    <div className="w-1/2 mr-1">
                    <Label name="Email" htmlFor="email" />
                    <Input type="email" placeholder="Enter operator email" id="email" /> 
                    </div>
                    <div className="w-1/2 mr-1">
                    <Label name="Mobile Number" htmlFor="mobile_number" />
                    <Input type="text" placeholder="Enter operator mobile number" id="mobileNumber" />
                    </div>
                  </div>

                  <div className="flex mb-4">
                  <div className="w-1/2 mr-1">
                  <Label name="Company" htmlFor="company" />
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
                    <Label name="Address" htmlFor="address" />
                    <Input type="text" placeholder="Enter operator working adress" id="address" />  
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="w-full mr-1">
                    <Label name="National Id" htmlFor="national_id" />
                    <Input type="text" placeholder="Enter operator national ID number" id="nationalId" />
                    </div>
                  </div>

                  <div className="flex justify-center align">
                    <Button name="Register Operator" type="submit"/>
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
