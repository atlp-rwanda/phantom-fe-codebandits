import React from 'react';
import { Link } from 'react-router-dom';

const phantom =
  'https://res.cloudinary.com/feyton/image/upload/v1645611696/Codebandits/phantom_lkpwx7.png';
const codebandits =
  'https://res.cloudinary.com/feyton/image/upload/v1644861999/Codebandits/codebandits_favicon_ahnxce.png';

export function Header() {
  return (
    <div className="flex border-b-4 pb-4">
      <Link to="/">
        <img
          src={phantom}
          alt="Phantom"
          className="w-44 xl:w-60 ml-8 xl:ml-20 mt-10"
        />
      </Link>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="flex bg-primary text-background font-sans font-sm py-4 mt-auto items-center">
      <div className="flex flex-col md:flex-row px-8 text-center w-full items-center justify-between">
        <img src={codebandits} alt="Codebandits" className="w-24 ml-8" />
        <h3 className="xl:ml-32">&copy;copyright Codebandits 2022</h3>
      </div>
      <div className="flex flex-col md:flex-row px-8 justify-between w-full items-center">
        <h3 className="xl:ml-40 text-md ">Support</h3>
        <h3 className="xl:ml-40 text-md ">Terms of use</h3>
        <Link to="/accounts/login">
          <h3 className="xl:ml-40 text-md">Administration</h3>
        </Link>
      </div>
    </footer>
  );
}
