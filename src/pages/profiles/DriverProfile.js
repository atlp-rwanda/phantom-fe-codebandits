import React, { useEffect, useState } from 'react';
import { axiosBase } from '../../utils/Api.js';
import Profile from './Profile.js';

const DriverProfile = () => {

  const [driverInfo, setDriverInfo] = useState([]);
  const [publicInfo, setPublicInfo] = useState([]);
  const [loading, setloading] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      setloading(true)
      try {
        const response = await axiosBase.get('/accounts/profile');

        setDriverInfo(response.data.data.user);
        setPublicInfo(response.data.data)
        setloading(false);
      } catch (error) {
        toast(error.message, { type: 'error' });
      } finally {
        setloading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Profile
      firstName={driverInfo.firstName}
      lastName={driverInfo.lastName}
      company={publicInfo.company}
      mobileNumber={publicInfo.mobileNumber}
      address={publicInfo.address}
      dob="12/06/1997"
      id={publicInfo.nationalID}
      position={driverInfo.role}
      email={driverInfo.email}
    />
  );
};

export default DriverProfile;
