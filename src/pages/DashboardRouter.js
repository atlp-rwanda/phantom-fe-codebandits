import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Sidebar from '../components/SideBar.js';
import RegisterDriver from '../forms/RegisterDrivers.js';
import RegisterOperator from '../forms/RegisterOperator.js';
import UpdateDriver from '../forms/UpdateDriver.js';
import UpdateOperator from '../forms/UpdateOperator.js';
import ComingSoon from './ComingSoon.js';
import { ProfilePage } from './dashboard/Mainpage.js';
import Management from './dashboard/Management.js';
import Roles from './dashboard/RolesPage.js';
import ModalRoutes from './ModalRoutes.js';

function DashRoutes() {
  return (
    <div className="flex z-0 h-full font-sans antialiased bg-grey-lightest w-full">
      <Sidebar />
      <div className=" w-4/5 float-right h-full p-4 top-8 right-2 ">
        <Routes>
          <Route path="main" element={<ComingSoon title={'dashboard'} />} />
          <Route path="roles" element={<Roles />} />
          <Route
            path="notifications"
            element={<ComingSoon title={'notifications'} />}
          />
          <Route path="settings" element={<ComingSoon title={'settings'} />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="management" element={<Management />} />

          <Route path="driver/register" element={<RegisterDriver />} />
          <Route path="driver/update" element={<UpdateDriver />} />

          <Route path="operator/register" element={<RegisterOperator />} />
          <Route path="operator/update" element={<UpdateOperator />} />
          <Route path="modal/*" element={<ModalRoutes />} />
          <Route
            path="*"
            element={
              <main className="font-bold flex h-full w-full items-center justify-center">
                <h1 className="text-3xl pb-4 font-bold mb-4">
                  Nothing to see here.
                </h1>
                <Link
                  to="/dashboard/main"
                  className="text-white rounded-md bg-primary py-1 px-4 m-3"
                >
                  Main Page
                </Link>
              </main>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default DashRoutes;
