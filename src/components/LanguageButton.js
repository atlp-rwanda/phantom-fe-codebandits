import React, { useState } from 'react';
import dropdown from '../assets/dropdown.png';
import LanguageDropdown from './LanguageDropdown.js';

const LanguageButton = ({ styles }) => {
  const [style, setStyle] = useState('hidden');
  const handleDropdown = () => {
    if (style === 'hidden') {
      setStyle('flex');
    } else {
      setStyle('hidden');
    }
  };
  return (
    <div>
      <button
        type="button"
        onClick={handleDropdown}
        className={`${styles} flex py-2 px-4 text-lg`}
      >
        <h1>English</h1>
        <img src={dropdown} alt="dropdown" className="w-3 mt-3 ml-2 h-2" />
      </button>
      <LanguageDropdown styles={`${style} absolute py-2 ml-4 w-fit`} />
    </div>
  );
};

export default LanguageButton;
