import React, { useState } from 'react';
import Button from './Button.js';
import Burger from './Burger.js';
import phantom from '../assets/phantom.png';
import LanguageButton from './LanguageButton.js';
import MobileMenu from './MobileMenu.js';

const Header = () => {
  const [style, setStyle] = useState('hidden');
  const handleToggleMenu = () => {
    if (style === 'hidden') {
      setStyle('flex');
    } else {
      setStyle('hidden');
    }
  };
  return (
    <div className="flex bg-background border-b-4 pb-4 sticky top-0">
      <div>
        <img
          src={phantom}
          alt="Phantom"
          className="w-44 xl:w-60 ml-8 xl:ml-20 mt-7 mb-2"
        />
      </div>
      <div className="hidden md:flex xl:flex ml-auto mr-20">
        <Button
          name="For operators"
          styles="bg-primary hover:bg-hover text-white rounded-xl mt-7 ml-6"
        />
        <Button
          name="Track Bus"
          styles="border border-primary bg-background hover:bg-hover2 text-primary rounded-xl mt-7 ml-6 px-6"
        />
        <LanguageButton styles="mt-8" />
      </div>
      <div className="flex flex-col absolute right-0 bg-background px-2">
        <button
          type="button"
          className="md:hidden xl:hidden ml-auto mr-12 mt-12"
          onClick={handleToggleMenu}
        >
          <Burger />
        </button>
        <MobileMenu styles={style} />
      </div>
    </div>
  );
};

export default Header;
