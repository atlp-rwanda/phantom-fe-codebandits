<<<<<<< HEAD
import RoleComponent from '@components/RoleCompent';
=======
>>>>>>> 753acfa (adds crud operations for buses)
import React from 'react';
import rolesDB from '../../database/rolesDB.json';

const roles = rolesDB;

function Roles() {
  return (
<<<<<<< HEAD
    <div className="w-full h-full font-raleway px-10 pt-3">
=======
    <div className="w-full h-full">
>>>>>>> 753acfa (adds crud operations for buses)
      <h1 className="text-2xl font-bold text-center justify-center font-rale">
        Manage roles and permissions
      </h1>
      <div className="mt-6 p-5 rounded-md shadow-main">
<<<<<<< HEAD
        <div className="w-full border rounded-sm p-2 ">
          <div>
            <ul className="grid grid-cols-[30%_60%] gap-1 border-b-2 font-raleway  font-bold py-1 px-2">
              <li>Role</li>
              <ul className="grid grid-cols-2">
                <li>Resources</li>
                <li>Permissions</li>
              </ul>
            </ul>
          </div>
          <div className="border-b-2">
            {roles.map((role) => {
              return (
                <RoleComponent key={role.name} role={role}></RoleComponent>
              );
            })}
          </div>
        </div>
=======
        <table>
          <thead className="w-full">
            <tr className="border-b border-primary">
              <td colSpan={2} className="font-bold text-center px-2">
                Roles
              </td>
              <td colSpan={4} className="font-bold text-center px-2">
                Permissions
              </td>
            </tr>
          </thead>
          <tbody className="w-full">
            {roles.map((role) => {
              return (
                <tr key={role} className="border-b-2">
                  <td colSpan={2} className="px-2 py-1 capitalize font-bold">
                    {role.name}
                  </td>
                  <td colSpan={4} className="px-2">
                    <tr className="flex flex-col">
                      {role.permissions.map((permission, ind) => {
                        return (
                          <td key={ind + '-perm'} className="my-2 capitalize">
                            {permission.object}:
                            {permission.perms.map((per, index) => {
                              return (
                                <span
                                  className={`bg-${per} text-white font-bold rounded-md px-2 py-1  mx-2 justify-between capitalize`}
                                  key={permission.object + index + per}
                                >
                                  {per}
                                </span>
                              );
                            })}
                          </td>
                        );
                      })}
                    </tr>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
>>>>>>> 753acfa (adds crud operations for buses)
      </div>
    </div>
  );
}

export default Roles;
