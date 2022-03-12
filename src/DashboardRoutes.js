import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Driver from './pages/dashboard/Driver.js';
import Operator from './pages/dashboard/Operator.js';
import RegisterDriver from './pages/forms/RegisterDrivers.js';
import RegisterOperator from './pages/forms/RegisterOperator.js';
import UpdateDriver from './pages/forms/UpdateDriver.js';
import UpdateOperator from './pages/forms/UpdateOperator.js';
import OperatorProfile from './pages/profiles/OperatorProfile.js';

const DashboardRoute = () => {
  return (
    <Routes>
      <Route path="operator" element={<Operator />} />
      <Route path="operator/update" element={<UpdateOperator />} />
      <Route path="driver" element={<Driver />} />
      <Route path="driver/update" element={<UpdateDriver />} />

      <Route path="operator/register" element={<RegisterOperator />} />
      <Route path="driver/register" element={<RegisterDriver />} />
      <Route path="profile" element={<OperatorProfile />} />
    </Routes>
  );
};

export default DashboardRoute;
