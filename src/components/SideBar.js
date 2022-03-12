import React, { forwardRef } from 'react';
import Burger from './Burger.js';
import closeMark from '../assets/close-mark.svg';
import SideNav from './SideNav.js';
import withClickOutside from './WithClickOutside.js';

const SideBar = forwardRef(({ open, setOpen }, ref) => {
  return (
    <div className="relative z-10">
      <SideNav styles="hidden md:flex lg:flex xl:flex" />
      <div ref={ref} className="flex">
        {open && <SideNav styles="fixed" />}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden lg:hidden xl:hidden"
        >
          {!open && <Burger styles="ml-2 bg-black" />}
          {open && (
            <img
              src={closeMark}
              alt="angle right"
              className="fixed left-36 h-6 mt-2 ml-2"
            />
          )}
        </button>
      </div>
    </div>
  );
});

export default withClickOutside(SideBar);
