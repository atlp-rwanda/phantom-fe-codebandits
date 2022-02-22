import React from 'react';
import codebandits from '../assets/codebandits.png';

const Footer = () => {
  return (
    <footer className="flex bg-primary text-background font-sans font-sm py-12">
      <div className="flex flex-col xl:flex-row px-8 text-center">
        <img src={codebandits} alt="Codebandits" className="w-24 ml-8" />
        <h3 className="xl:ml-32 mt-6">&copy;copyright Codebandits 2022</h3>
      </div>
      <div className="flex flex-col xl:flex-row px-8">
        <h3 className="xl:ml-40 mt-2 text-md mb-4">Support</h3>
        <h3 className="xl:ml-40 mt-2 text-md mb-4">Terms of use</h3>
        <h3 className="xl:ml-40 mt-2 text-md">Administration</h3>
      </div>
    </footer>
  );
};

export default Footer;
