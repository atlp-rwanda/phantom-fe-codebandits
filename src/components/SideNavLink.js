import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNavLink = ({ image, name, linkTo }) => {
  return (
    <div className="flex justify-center items-center hover:bg-gray-200 py-1">
      <img src={image} alt="icon" className="w-6" />
      <NavLink
        to={linkTo}
        className="py-1 px-2 font-bold my-1  cursor-pointer w-full"
      >
        <li>{name}</li>
      </NavLink>
    </div>
  );
};

export default SideNavLink;
