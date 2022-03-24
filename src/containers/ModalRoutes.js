import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AssignBusModal from '../Modals/AssignBus.js';
import ChangeRole from '../Modals/ChangeRole.js';
import UpdateBus from '../pages/UpdateBus.js';

function ModalRoutes() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center bg-gray-600 bg-opacity-50">
      <div className="relative bg-white rounded-md px-2 py-2 min-w-md h-fit my-auto">
        <div
          className="absolute top-[-15px] right-[-15px] font-raleway text-white bg-red rounded-circle w-[30px] h-[30px] flex justify-center items-center font-bold cursor-pointer"
          onClick={handleBack}
        >
          X
        </div>
        <Routes>
          <Route
            path="driver/assign/:id"
            element={<AssignBusModal handleClose={handleBack} />}
          />
          <Route path="bus/update/:id" element={<UpdateBus />} />
          <Route path="permission/change/:id" element={<ChangeRole />} />
        </Routes>
      </div>
    </div>
  );
}

export default ModalRoutes;
