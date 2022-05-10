import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import TableSkeleton from '../../components/SkeletonUIs/TableSkeleton.js';
import { axiosBase } from '../../utils/Api.js';
import Profile from './Profile.js';

const OperatorProfile = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [publicInfo, setPublicInfo] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      try {
        const response = await axiosBase.get('/accounts/profile');

        setUserInfo(response.data.data.user);
        setPublicInfo(response.data.data);
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
    <div>
      {!loading ? (
        <Profile
          firstName={userInfo.firstName}
          lastName={userInfo.lastName}
          company={publicInfo.company}
          mobileNumber={publicInfo.mobileNumber}
          address={publicInfo.address}
          id={publicInfo.nationalID}
          position={userInfo.role}
          email={userInfo.email}
          image={userInfo.image}
        />
      ) : (
        <div>
          <TableSkeleton />
        </div>
      )}
    </div>
  );
};

export default OperatorProfile;
