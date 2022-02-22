import React from 'react';
import Button from './Button.js';
import bus from '../assets/bus.png';

const Intro = () => {
  return (
    <div className="flex flex-col items-center xl:flex-row">
      <div>
        <h1 className="flex flex-col w-max text-3xl xl:text-5xl xl:text-5xl font-raleway font-extrabold mx-14 xl:mx-28 mt-12 xl:mt-32">
          <span>Track bus location,</span>
          <span className="ml-4">Save your time.</span>
        </h1>
        <p className="flex flex-col text-sm xl:text-base mx-20 xl:ml-36 mt-10">
          <span>Check the location of the buses</span>
          <span className="ml-4">on their respective routes</span>
        </p>
        <Button
          name="Start"
          styles="bg-blue-600 text-white rounded-3xl mt-12 px-12 py-2 ml-28 xl:ml-44"
        />
      </div>
      <div className="w-full px-20 xl:px-0 xl:ml-auto xl:mr-36 xl:px-20 mt-28">
        <img src={bus} alt="Bus" />
      </div>
    </div>
  );
};

export default Intro;
