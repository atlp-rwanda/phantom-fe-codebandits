import React, { useEffect, useState } from 'react';
import { axiosBase } from '../../utils/Api.js';
import UpdateProfile from './UpdateProfile.js';


const UpdateDriver = () => {
// const [data, setData] = useState();

//   useEffect(() =>{
//     const fetchData =async ()=>{
//       try {
//         const response = await axiosBase.get('/accounts/profile'); 
//         const userInfo = response.data.data;
//         setData(userInfo);
//       } catch (error) {
        
//       }
   
      
//     }
//     fetchData()
//   },[])

  return (
    
    <div>
      {
      <UpdateProfile
        addressInfo= "Kigali rwanda"
        companyInfo="REL"
        firstNameInfo="Eric"
        lastNameInfo="SHEMA"
        mobileNumberInfo="0789989655"
        nationalIDInfo="1199780020002120"
        driverLicenseInfo="1199780020002120"
        position="Driver"
      />
}
    </div>
  );
};

export default UpdateDriver;
