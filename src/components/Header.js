import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button.js';
import Burger from './Burger.js';
import MobileMenu from './MobileMenu.js';
import LanguageButton from './LanguageButton.js';
import phantom from '../assets/phantom.png';
import xmark from '../assets/xmark.svg';
import withClickOutside from './WithClickOutside.js';

const Header = forwardRef(({ open, setOpen }, ref) => {
  return (
    <div className="flex bg-background border-b-4 pb-4 sticky top-0 z-20">
      <div>
        <Link to="/">
          <img
            src={phantom}
            alt="Phantom"
            className="w-44 xl:w-60 ml-8 xl:ml-20 mt-7 mb-2"
          />
        </Link>
      </div>
      <div className="hidden md:flex xl:flex ml-auto mr-20">
        <Link to="/login">
          <Button
            name="For operators"
            styles="bg-primary hover:bg-hover text-white rounded-xl mt-7 ml-6"
          />
        </Link>

        <Button
          name="Track Bus"
          styles="border border-primary bg-background hover:bg-hover2 text-primary rounded-xl mt-7 ml-6 px-6"
        />
        <LanguageButton styles="mt-8" />
      </div>
      <section
        ref={ref}
        className="flex flex-col absolute right-0 bg-background px-2"
      >
        <button
          type="button"
          id="toggle"
          className="md:hidden xl:hidden ml-auto mr-12 mt-8"
          onClick={() => setOpen(!open)}
        >
          {!open && <Burger />}
          {open && <img src={xmark} alt="xmark" className="w-6 mb-2" />}
        </button>

        {open && <MobileMenu />}
      </section>
    </div>
  );
});

export default withClickOutside(Header);
