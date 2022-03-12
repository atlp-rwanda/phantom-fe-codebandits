import React from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../components/SideBar.js';

const Account = () => {
  return (
    <div className="min-h-[70vh]">
      <main className="flex flex-row h-full">
        <aside>
          <SideBar />
        </aside>
        <section className="w-7/10 bg-blue flex items-center justify-center  w-full flex-col">
          <h1 className="font-bold">
            This is the notification board for logged in user
          </h1>
          <div className="flex flex-col">
            <div className="flex">
              <Link
                to="/dashboard/driver/register"
                className="m-2 py-1 px-3 bg-primary rounded-md"
              >
                Register Driver
              </Link>
              <Link
                to="/dashboard/driver/update"
                className="ml-8 m-2 py-1 px-3 bg-gray-500 rounded-md"
              >
                Update Driver
              </Link>
            </div>
            <div className="flex">
              <div>
                <Link
                  to="/dashboard/operator/register"
                  className="m-2 py-1 px-3 bg-primary rounded-md"
                >
                  Register Operator
                </Link>
              </div>
              <Link
                to="/dashboard/operator/update"
                className="m-2 py-1 px-3 bg-gray-500 rounded-md"
              >
                Update Operator
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Account;
