import React from 'react';

function ManageDropdown({ id }) {
  const handleManage = () => {
    console.log('Edit clicked', id);
  };
  const handlePermissions = () => {
    console.log('manage clicked', id);
  };
  return (
    <div className="z-10">
      <select
        name=""
        id=""
        className="py-1 px-3 font-rale font-bold bg-transparent border rounded-sm"
      >
        <option hidden={true}>Manage</option>
        <option
          className="cursor-pointer"
          value="manage"
          onClick={handleManage}
        >
          Edit
        </option>
        <option className="cursor-pointer" value="">
          Delete
        </option>
        <option className="cursor-pointer" value="" onClick={handlePermissions}>
          Permissions
        </option>
      </select>
    </div>
  );
}

export default ManageDropdown;
