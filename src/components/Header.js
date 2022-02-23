import React from 'react';
import Button from './Button.js';
import Burger from './Burger.js';
import phantom from '../assets/phantom.png';

const Header = () => {
  return (
    <div className="flex border-b-4 pb-4">
      <img
        src={phantom}
        alt="Phantom"
        className="w-44 xl:w-60 ml-8 xl:ml-20 mt-10"
      />
      <div className="hidden md:flex xl:flex ml-auto mr-20">
        <Button
          name="For operators"
          styles="bg-primary hover:bg-hover text-white rounded-xl mt-10 ml-6"
        />
        <Button
          name="Track Bus"
          styles="border border-primary bg-white hover:bg-hover2 text-primary rounded-xl mt-10 ml-6 px-6"
        />
        <h2 className="mt-12 ml-4 py-2 px-4">Language</h2>
      </div>
      <div className="md:hidden xl:hidden ml-auto mr-12 mt-12">
        <Burger />
        <Burger />
        <Burger />
      </div>
    </div>
  );
};

export default Header;
