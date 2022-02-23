import React from 'react';
import LabelComponent from '../components/LabelComponent.js';
import SideBar from '../components/SideBar.js';
import { ButtonA as Button } from '../components/Button.js';
import profileImg from '../images/profileImg.jpg';

const OperatorProfile = () => {
  const inpuStyles =
    'appearance-none border font-rale rounded w-full py-2 px-3 text-grey-darker bg-gray-200 text-md outline-hidden hover:cursor-not-allowed';
  return (
    <div className="font-sans antialiased bg-grey-lightest  w-full ">
      <section className=''>
      <SideBar />
      </section>
      <section className=" w-4/5 float-right h-full p-8 absolute top-8 right-2 ">
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
              <h1 className="font-black text-3xl">KAMALIZA Ange</h1>
              <h2 className="font-bold">
                Operator at Kigali Bus Service (KBS)
              </h2>
              <h3>kamalizaange@kbs.com</h3>
              <Button name="Edit profile" styles="text-white px-6" />
            </div>
          </div>
          <form action="">
            <section>
              <div className="ml-1 ">
                <div className="mb-2 block font-raleway">
                  <LabelComponent
                    htmlFor={'FirstName'}
                    name={'First name '}
                  ></LabelComponent>
                  <input
                    type="text"
                    name="FirstName"
                    className={inpuStyles}
                    placeholder="KAMALIZA"
                    id="address"
                    disabled
                  />
                </div>
              </div>
              <div className="ml-1 ">
                <div className="mb-2 block font-raleway">
                  <LabelComponent
                    htmlFor={'LastName'}
                    name={'Last name '}
                  ></LabelComponent>
                  <input
                    type="text"
                    name="LastName"
                    className={inpuStyles}
                    placeholder="Ange"
                    id="lastName"
                    disabled
                  />
                </div>
              </div>
              <div className="ml-1 ">
                <div className="mb-2 block font-raleway">
                  <LabelComponent
                    htmlFor={'mobileNumber'}
                    name={'Mobile Number '}
                  ></LabelComponent>
                  <input
                    type="text"
                    name="Id"
                    className={inpuStyles}
                    placeholder="0789989655"
                    id="address"
                    disabled
                  />
                </div>
              </div>
              <div className="ml-1 ">
                <div className="mb-2 block font-raleway">
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
                    disabled
                  />
                </div>
              </div>
              <Button name="Save" styles="text-white px-10" />
            </section>
          </form>
        </div>
      </section>
    </div>
  );
};

export default OperatorProfile;
