import React, { forwardRef } from 'react';
import dropdown from '../assets/dropdown.png';
import LanguageDropdown from './LanguageDropdown.js';
import withClickOutside from './WithClickOutside.js';

const LanguageButton = forwardRef(({ open, setOpen, styles }, ref) => {
  return (
    <div ref={ref}>
      <button
        type="button"
        className={`${styles} lg:mt-8 xl:mt-8 flex py-2 px-4 text-lg hover:font-bold`}
        onClick={() => setOpen(!open)}
      >
        <h1>English</h1>
        <img src={dropdown} alt="dropdown" className="w-3 mt-3 ml-2 h-2" />
      </button>
      {open && <LanguageDropdown styles="absolute py-2 ml-4 w-fit" />}
    </div>
  );
});

export default withClickOutside(LanguageButton);
