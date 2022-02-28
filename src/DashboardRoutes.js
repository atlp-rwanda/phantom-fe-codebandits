import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Operator from './pages/dashboard/Operator.js';

const DashboardRoute = () => {
  return (
    <Routes>
      <Route path="operator" element={<Operator />} />
    </Routes>
  );
};

export default DashboardRoute;
