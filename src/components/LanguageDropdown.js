import React from 'react';

const LanguageDropdown = ({ styles }) => {
  return (
    <ul className=" z-10">
      <li className={`${styles} bg-background w-full  cursor-pointer`}>
        French
      </li>
      <li
        className={`${styles} top-64 md:top-28 lg:top-28 xl:top-28 bg-background cursor-pointer`}
      >
        Kinyarwanda
      </li>
    </ul>
  );
};

export default LanguageDropdown;
