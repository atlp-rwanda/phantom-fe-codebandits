import React from 'react';

const LanguageDropdown = ({ styles }) => {
  return (
    <ul className="">
      <li className={styles}>French</li>
      <li className={`${styles} top-64 lg:top-32 lx:top-32 bg-background`}>
        Kinyarwanda
      </li>
    </ul>
  );
};

export default LanguageDropdown;
