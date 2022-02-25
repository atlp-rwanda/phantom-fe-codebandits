import React, { useState, useEffect } from 'react';
import validator from 'validator';
import Input from '../components/Input.js';
import {ButtonA as Button} from '../components/Button.js';
import busMap from '../images/busMap.png'


function RegisterDrivers() {

  const initialValues = {FirstName: '', LastName: '', Email: '', MobileNumber: '', Address: '', NationalId: '', License:''};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErros] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErros(validateForm(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validateForm = (values) => {
    const errors = {};

    const validateEmail = (value) => {
      if (!values.Email) {
        errors.Email = 'Email is required';
      } else if (!validator.isEmail(value)) {
        errors.Email = errors.Email = 'Wrong Email';
      }
    };
    validateEmail(values.Email);

    const namePattern = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;

    if (!values.FirstName) {
      errors.FirstName = 'First name is required';
    } else if (!values.FirstName.match(namePattern)) {
      errors.FirstName = 'Enter a valid name';
    }

    if (!values.LastName) {
      errors.LastName = 'Last name is required';
    } else if (!values.LastName.match(namePattern)) {
      errors.LastName = 'Enter valid name';
    }

    const phoneRegex = /(0|7|8)\d{9}$/;
    if (!values.MobileNumber) {
      errors.MobileNumber = 'Mobile number is required';
    } else if (!values.MobileNumber.match(phoneRegex)) {
      errors.MobileNumber = 'Enter valid phone number';
    }

    if (!values.Address) {
      errors.Address = 'Address is required';
    }
    if (!values.License) {
      errors.License = 'License is required';
    }

    const IdRegex = /^[1-3](19|20)\d{2}[7-8]\d{7}[0-9]\d{2}$/;
    if (!values.NationalId) {
      errors.NationalId = 'Id is required';
    } else if (!values.NationalId.match(IdRegex)) {
      errors.NationalId = 'Nationa Id must be 16 numbers and valid';
    }
    
    return errors;
  };

  return (
    <div>
     
      <div className="font-sans antialiased bg-grey-lightest">
        <div className="w-full bg-grey-lightest ">
          <div className="  py-8  md:flex ">
            <div className="mr-2 hidden lg:block md:w-1/2 ">
              <img   src={busMap}  alt=" Bus IMG" className="h-50  w-full max-w-lg   md:w-70 md:w-full lg:mx-auto lg:h-full"
              />
            </div>
            <div className=" block bg-white rounded  p-2 w-full lg:max-w-3xl shadow-lg min-h-[70vh]">
              <div className="py-4 px-8 text-black font-bold lg:px-4 md:px-4 ">
               <h1 className='text-center  text-2xl  font-rale font-bold md:ml-0 md:text-left'>Register Driver</h1> 
              </div>
              <form onSubmit={handleSubmit} >

                <div className="py-4 px-4  w-full  lg:mx-auto ">
                  <div className="block mb-4 xl:flex md:grid md:grid-cols-2 md:gap-2">
                    <div className=" mr-1 xl:w-1/2 ">
                      <Input type="text" name="FirstName" labelName="First Name" placeholder="Enter driver first name" id="firstName" value={formValues.FirstName} onChange={handleChange}/>
                      <p className="text-red-800">{formErrors.FirstName}</p>  
                    </div>
                    <div className=" ml-1 xl:w-1/2">
                    <Input type="text" name="LastName" labelName="Last Name" placeholder="Enter driver last name" id="lastName" value={formValues.LastName} onChange={handleChange}/>
                    <p className="text-red-800">{formErrors.LastName}</p>
                    </div>
                  </div>
                  <div className="block mb-4 xl:flex md:grid md:grid-cols-2  md:gap-2">
                    <div className="mr-1 xl:w-1/2 ">
                    <Input type="text" name="Email"  labelName="Email" placeholder="Enter driver email" id="email"  value={formValues.Email} onChange={handleChange} />
                    <p className="text-red-800">{formErrors.Email}</p>
                    </div>
                    <div className=" ml-1 xl:w-1/2 ">
                    <Input type="text" name="MobileNumber" labelName="Mobile Number" placeholder="Enter driver mobile number" id="mobileNumber" value={formValues.MobileNumber}  onChange={handleChange} />
                    <p className="text-red-800">{formErrors.MobileNumber}</p>
                    </div>
                  </div>

                  <div className="block mb-4 xl:flex md:grid md:grid-cols-2  md:gap-2">
                    <div className=" mr-1 xl:w-1/2 ">
                    <label  htmlFor="company" name="Company"  className="block text-grey-darker text-sm font-bold mb-2" > company</label>
                      <select name="" id="company" placeholder="Select driver company"
                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker bg-gray-200">
                        <option className="text-grey-darker"> Select company </option>
                        <option value="">Royal Express Limited </option>
                        <option value=""> City Express Limited </option>
                        <option value="">KIGALI BUS SERVICES</option>
                      </select>
                    </div>
                    <div className=" ml-1 xl:w-1/2 ">
                    <Input type="text" name="Address" labelName="Address" placeholder="Enter driver working adress" id="address" value={formValues.Address}  onChange={handleChange} />    
                    <p className="text-red-800">{formErrors.Address}</p> 
                    </div>
                  </div>

                  <div className="block mb-4 xl:flex md:grid md:grid-cols-2 md:gap-2">
                    <div className=" mr-1 xl:w-1/2 ">
                    <Input type="text" name="NationalId" labelName="National Id" placeholder="Enter driver national ID number" id="nationalId"  onChange={handleChange} />
                    <p className="text-red-800">{formErrors.NationalId}</p>
                     
                    </div>
                    <div className=" ml-1 xl:w-1/2 ">
                     <Input type="text" name="License" labelName="Driver License" placeholder="Enter enter driver license number" id="license" onChange={handleChange} />
                     <p className="text-red-800">{formErrors.License}</p>
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