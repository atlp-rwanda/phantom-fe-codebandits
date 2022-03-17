import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { saveInfo, editInfo } from '../../redux/reducers/profileReducer.js';
import profileImg from '../../images/profileImg.jpg';
import camera from '../../assets/camera-solid.svg';
import Input from '../../components/Input.js';

const Profile = ({
  firstName,
  lastName,
  company,
  mobileNumber,
  address,
  dob,
  id,
  position,
  email
}) => {
  const [src, setSrc] = useState(profileImg);
  const dispatch = useDispatch();
  const { disabled, styles, upload, editIcon, editPicture } = useSelector(
    (state) => state?.profileInfo
  );

  return (
    <div className="flex h-full font-sans antialiased bg-grey-lightest w-full">
      <section className="mx-auto items-center w-full h-full p-8 top-8 right-2 ">
        <h1 className="font-black text-2xl">Profile</h1>
        <div className="bg-white rounded p-4 w-full shadow-md min-h-[70vh] mt-6 pb-10">
          <div>
            <div className="flex flex-col tex-center md:flex-row lg:flex-row xl:flex-row items-center justify-center bg-gray-100 mb-10 h-80 md:h-60 lg:h-60 xl:h-60 pb-10">
              <span className="w-20 h-20 my-8 md:w-24 lg:w-24 xl:w-24 md:h-24 lg:h-24 xl:h-24 mr-6">
                <div className="relative">
                  <label>
                    <img
                      src={src}
                      alt="profile-img"
                      id="profile-img"
                      className="rounded-full object-cover w-20 h-20 md:w-24 lg:w-24 xl:w-24 md:h-24 lg:h-24 xl:h-24"
                    />
                  </label>
                </div>
              </span>
              <div className="h-20 flex flex-col items-center md:items-baseline lg:items-baseline xl:items-baseline">
                <h1 className="font-black text-lg md:text-3xl lg:text-3xl xl:text-3xl text-3xl">
                  Eric SHEMA
                </h1>
                <h2 className="font-bold text-sm md:text-base lg:text-base xl:text-base text-base">
                  Driver at Kigali Bus Services
                </h2>
                <h3>ericshema@gmail.com</h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <section className="flex flex-col items-center lg:flex-row xl:flex-row">
              <div className="ml-8">
                <div className="mb-4 block font-raleway">
                  <Input
                    htmlFor="FirstName"
                    labelName="First Name"
                    name="FirstName"
                    styles={styles}
                    defaultValue="Eric"
                    id="firstName"
                    disabled={disabled}
                  />
                </div>
                <div className="mb-4 block font-raleway">
                  <Input
                    htmlFor="LastName"
                    labelName="Last name "
                    type="text"
                    name="LastName"
                    styles={styles}
                    defaultValue="SHEMA"
                    id="lastName"
                    disabled={disabled}
                  />
                </div>
                <div className="mb-4 block font-raleway">
                  <Input
                    htmlFor="dateOfBirth"
                    labelName="Date Of Birth"
                    type="date"
                    name="dateOfBirth"
                    styles={styles}
                    defaultValue="02/02/1992"
                    id="dateOfBirth"
                    disabled
                  />
                </div>
                <div className="mb-5 block font-raleway">
                  <Input
                    htmlFor="email"
                    labelName="Email"
                    type="email"
                    name="email"
                    styles={`${styles} border-none`}
                    defaultValue="ericshema@gmail.com"
                    id="email"
                    disabled
                  />
                </div>
              </div>
              <div className="pl-10 lg:pl-24 xl:pl-24">
                <div className="mb-4 block font-raleway">
                  <Input
                    htmlFor="company"
                    labelName="Company"
                    type="text"
                    name="company"
                    styles={`${styles} border-none`}
                    defaultValue="Kigali Bus Services"
                    id="company"
                    disabled
                  />
                </div>
                <div className="mb-4 block font-raleway">
                  <Input
                    htmlFor="mobileNumber"
                    labelName="Mobile Number "
                    type="text"
                    name="company"
                    styles={styles}
                    defaultValue="0789989655"
                    id="company"
                    disabled={disabled}
                  />
                </div>
                <div className="mb-4 block font-raleway">
                  <Input
                    htmlFor="nationalId"
                    labelName="National ID"
                    type="text"
                    name="nationalid"
                    styles={`${styles} border-none`}
                    defaultValue="1199780020002120"
                    id="nationalId"
                    disabled
                  />
                </div>
                <div className="mb-4 block font-raleway">
                  <Input
                    htmlFor="address"
                    labelName="Address"
                    type="text"
                    name="address"
                    styles={styles}
                    defaultValue="Kacyiru, Kigali"
                    id="address"
                    disabled={disabled}
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
