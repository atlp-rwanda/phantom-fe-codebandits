import React from 'react';
import Button from './Button.jsx';
import phantom from '../assets/phantom.png';

const Header = () => {
  return (
    <div className="flex border-b-4 pb-4">
      <img src={phantom} alt="Phantom" className="w-60 ml-20 mt-10" />
      <div className="flex ml-auto mr-20">
        <Button
          name="For operators"
          styles="bg-blue-600 text-white rounded-xl mt-10 ml-6"
        />
        <Button
          name="Track Bus"
          styles="border border-blue-600 bg-white text-blue-600 rounded-xl mt-10 ml-6 px-6"
        />
        <h2 className="mt-12 ml-4 py-2 px-4">Language</h2>
      </div>
    </div>
  );
};

export default Header;
