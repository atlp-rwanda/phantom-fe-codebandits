import React from 'react';
import { Link } from 'react-router-dom';
import codebandits from '../assets/codebandits.png';

const Footer = () => {
  return (
    <footer className="flex bg-primary text-background font-sans font-sm py-12">
      <div className="flex flex-col xl:flex-row px-12 text-center items-center">
        <img
          src={codebandits}
          alt="Codebandits"
          className="w-24 ml-4 xl:ml-8"
        />
        <h3 className="xl:ml-32 mt-6 xl:mt-2">
          &copy;copyright Codebandits 2022
        </h3>
      </div>
      <div className="flex flex-col xl:flex-row xl:mt-3 mx-8 md:mx-16 xl:mx-16 ml-auto md:ml-auto">
        <Link to="/#" className="xl:ml-0 mt-2 text-md mb-4 hover:font-bold">
          Support
        </Link>
        <Link to="/#" className="xl:ml-44 mt-2 text-md mb-4 hover:font-bold">
          Terms of use
        </Link>
        <Link to="/#" className="xl:ml-44 mt-2 text-md hover:font-bold">
          Administration
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
