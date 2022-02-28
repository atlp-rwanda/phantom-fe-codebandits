import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RegisterDriver from './forms/RegisterDrivers.js';
import RegisterOperator from './forms/RegisterOperator.js';
import Driver from './pages/dashboard/Driver.js';
import Operator from './pages/dashboard/Operator.js';

const DashboardRoute = () => {
  return (
    <Routes>
      <Route path="operator" element={<Operator />} />
      <Route path="operator/register" element={<RegisterOperator />} />
      <Route path="driver" element={<Driver />} />
      <Route path="driver/register" element={<RegisterDriver />} />
    </Routes>
  );
};

export default DashboardRoute;
