import React, { useState } from 'react';
import LabelComponent from '../components/LabelComponent.js';
import SideBar from '../components/SideBar.js';
import { ButtonA as Button } from '../components/Button.js';
import profileImg from '../images/profileImg.jpg';

const DriverProfile = () => {
  const inpuStyles =
    'border border-black font-rale rounded w-full py-2 px-3 text-grey-darker bg-gray-200 text-md';

  const dataStyles =
    'appearance-none font-rale rounded w-full py-2 px-3 text-grey-darker outline-hidden bg-white text-md';
  const [disabled, setDisabled] = useState(true);
  const [styles, setStyles] = useState(dataStyles);

  const handleEditProfile = () => {
    setDisabled(false);
    setStyles(inpuStyles);
  };

  const handleSave = () => {
    setDisabled(true);
    setStyles(dataStyles);
  };

  return (
    <div className="flex z-0 h-full font-sans antialiased bg-grey-lightest w-full">
      <section>
        <SideBar />
      </section>
      <section className=" w-4/5 float-right h-full p-8 top-8 right-2 ">
        <h1 className="font-black text-2xl">Profile</h1>

        <div className="bg-white rounded  p-4 w-full  shadow-md min-h-[70vh] mt-6 pb-10">
          <div className="flex items-center justify-center bg-gray-100 mb-10 pb-10">
            <span className="w-24 h-24 mr-6">
              <img
                src={profileImg}
                alt="Image"
                className="rounded-full object-cover h-24 w-24"
              />
            </span>
            <div className="mt-14">
              <h1 className="font-black text-3xl">NGABO Patrick</h1>
              <h2 className="font-bold">
                Driver at Kigali Bus Service (KBS)
              </h2>
              <h3>patrickngabo@gmail.com</h3>
              <Button
                name="Edit profile"
                styles="text-white px-6"
                onClick={handleEditProfile}
              />
            </div>
          </div>
          <div action="">
            <section>
              <div className="ml-1 ">
                <div className="mb-2 block font-raleway">
                  <LabelComponent htmlFor="FirstName" name="First name " />
                  <input
                    type="text"
                    name="FirstName"
                    className={styles}
                    defaultValue="NGABO"
                    id="address"
                    disabled={disabled}
                  />
                </div>
              </div>
              <div className="ml-1 ">
                <div className="mb-2 block font-raleway">
                  <LabelComponent htmlFor="LastName" name="Last name " />
                  <input
                    type="text"
                    name="LastName"
                    className={styles}
                    defaultValue="Patrick"
                    id="lastName"
                    disabled={disabled}
                  />
                </div>
              </div>
              <div className="ml-1 ">
                <div className="mb-2 block font-raleway">
                  <LabelComponent
                    htmlFor="mobileNumber"
                    name="Mobile Number "
                  />
                  <input
                    type="text"
                    name="Id"
                    className={styles}
                    defaultValue="0789989655"
                    id="address"
                    disabled={disabled}
                  />
                </div>
              </div>
              <div className="ml-1 ">
                <div className="mb-2 block font-raleway">
                  <LabelComponent htmlFor="nationalId" name="National ID" />
                  <input
                    type="text"
                    name="nationalid"
                    className={styles}
                    defaultValue="1 1997 80020002 1 20"
                    id="nationalId"
                    disabled={disabled}
                  />
                </div>
              </div>
              <div className="ml-1 ">
                <div className="mb-2 block font-raleway">
                  <LabelComponent htmlFor="email" name="Email" />
                  <input
                    type="email"
                    name="email"
                    className={dataStyles}
                    defaultValue="patrickngabo@gmail.com"
                    id="email"
                    disabled
                  />
                </div>
              </div>
              <div className="ml-1 ">
                <div className="mb-2 block font-raleway">
                  <LabelComponent htmlFor="company" name="Company" />
                  <input
                    type="text"
                    name="company"
                    className={dataStyles}
                    defaultValue="Kigali Bus Services (KBS)"
                    id="company"
                    disabled
                  />
                </div>
              </div>
              <div className="ml-1 ">
                <div className="mb-2 block font-raleway">
                  <LabelComponent htmlFor="address" name="Address" />
                  <input
                    type="text"
                    name="address"
                    className={styles}
                    defaultValue="Kacyiru, Kigali"
                    id="address"
                    disabled={disabled}
                  />
                </div>
              </div>
              <Button
                name="Save"
                onClick={handleSave}
                styles="text-white px-10"
              />
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DriverProfile;
