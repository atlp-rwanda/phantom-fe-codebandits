import React from 'react';
import codebandits from '../assets/codebandits.png';

const Footer = () => {
  return (
    <div className="flex bg-primary py-8">
      <div className="flex justify-center text-background mx-auto">
        <img src={codebandits} alt="Codebandits" className="w-10" />
        <h3 className="xl:ml-32 mt-2">&copy;copyright Codebandits 2022</h3>
        <h3 className="xl:ml-40 mt-2 text-md">Support</h3>
        <h3 className="xl:ml-40 mt-2 text-md">Terms of use</h3>
        <h3 className="xl:ml-40 mt-2 text-md">Administration</h3>
      </div>
    </div>
  );
};

export default Footer;
