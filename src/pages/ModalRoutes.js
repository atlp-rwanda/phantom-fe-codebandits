import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RouteView from './routes/RouteView.js';

function ModalRoutes() {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-400 bg-opacity-40 flex justify-center items-center overflow-hidden">
      <div className="h-fit w-fit overflow-auto rounded-md shadow-main">
        <Routes>
          <Route path="routes/view/:id" element={<RouteView />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default ModalRoutes;
