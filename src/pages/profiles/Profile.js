import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import camera from '../../assets/camera-solid.svg';
import { ButtonA as Button } from '../../components/Button.js';
import Input from '../../components/Input.js';
import profileImg from '../../images/profileImg.jpg';
import { editInfo, saveInfo } from '../../redux/reducers/profileReducer.js';

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
  const {
    disabled,
    styles,
    hideSave,
    upload,
    editIcon,
    editPicture,
    hideEdit
  } = useSelector((state) => state?.profileInfo);

  const onChange = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setSrc(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="bg-white rounded  w-full shadow-md min-h-[70vh] mt-6 pb-10">
      <div>
        <div className="flex flex-col tex-center md:flex-row lg:flex-row xl:flex-row items-center justify-center bg-gray-100 mb-10 h-80 md:h-60 lg:h-60 xl:h-60 pb-10 font-raleway">
          <span className="w-20 h-20 my-8 md:w-24 lg:w-24 xl:w-24 md:h-24 lg:h-24 xl:h-24 mr-6">
            <div className="relative">
              <label htmlFor={upload}>
                <img
                  src={src}
                  alt="profile-img"
                  id="profile-img"
                  className={`${editPicture} rounded-full object-cover w-20 h-20 md:w-24 lg:w-24 xl:w-24 md:h-24 lg:h-24 xl:h-24`}
                />
                <div
                  className={`${editIcon} absolute bg-gray-100 rounded-full w-5 h-5 left-7 md:left-10 lg:left-10 xl:left-20 top-7 md:top-8 lg:top-16 xl:top-18 cursor-pointer`}
                >
                  <img src={camera} alt="" className="w-3 h-3 m-1" />
                </div>
              </label>
            </div>
            <input
              id="photo-upload"
              type="file"
              accept=".jpg, .jpeg, .png"
              onChange={onChange}
            />
          </span>
          <div className="h-20 flex flex-col items-center md:items-baseline lg:items-baseline xl:items-baseline">
            <h1 className="font-black text-lg md:text-3xl lg:text-3xl xl:text-3xl ">
              {firstName} {lastName}
            </h1>
            <h2 className="font-bold text-sm md:text-base lg:text-base xl:text-base ">
              {position} at {company}
            </h2>
            <h3>{email}</h3>
            <div className="">
              <Button
                name="Edit profile"
                id="edit"
                styles={`${hideEdit} text-white text-sm md:text-base lg:text-base xl:text-base mt-4 px-4 md:px-6 lg:px-6 xl:px-6`}
                onClick={() => dispatch(editInfo())}
              />
            </div>
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
                defaultValue={firstName}
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
                defaultValue={lastName}
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
                defaultValue={dob}
                id="dateOfBirth"
                disabled={disabled}
              />
            </div>
            <div className="mb-5 block font-raleway">
              <Input
                htmlFor="email"
                labelName="Email"
                type="email"
                name="email"
                styles={`${styles} border-none`}
                defaultValue={email}
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
                defaultValue={company}
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
                defaultValue={mobileNumber}
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
                defaultValue={id}
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
                defaultValue={address}
                id="address"
                disabled={disabled}
              />
            </div>
          </div>
        </section>
        <div className="flex">
          <Button
            name="cancel"
            id="cancel"
            styles={`${hideSave} bg-red text-white px-10 ml-8 mt-16`}
          />
          <Button
            name="Save"
            id="save"
            onClick={() => {
              dispatch(saveInfo());
              toast('Profile Updated', { type: 'success' });
            }}
            styles={`${hideSave} text-white px-10 ml-8 mt-16`}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
