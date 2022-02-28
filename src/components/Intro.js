import React from 'react';
import Button from './Button.js';
import bus from '../assets/bus.png';

const Intro = () => {
  return (
    <div className="flex flex-col items-center lg:flex-row xl:flex-row">
      <div>
        <h1 className="flex flex-col text-3xl md:text-5xl xl:text-5xl font-raleway font-extrabold mx-12 xl:mx-28 mt-24 md:mt-32 xl:mt-32">
          <span>Track bus location,</span>
          <span className="ml-4 md:ml-10">Save your time.</span>
        </h1>
        <p className="flex flex-col text-sm md:text-xl xl:text-base mx-20 md:ml-32 xl:ml-52 mt-10">
          <span>Check the location of the buses</span>
          <span className="ml-4">on their respective routes</span>
        </p>
        <Button
          name="Start"
          styles="bg-primary hover:bg-hover text-white rounded-3xl mt-12 px-12 xl:px-12 py-2 ml-28 md:ml-48 xl:ml-64"
        />
      </div>
      <div className="w-full px-20 lg:w-80 xl:w-96 lg:ml-auto xl:ml-auto lg:mr-36 xl:mr-36 lg:px-0 xl:px-0 mt-28">
        <img src={bus} alt="Bus" />
      </div>
    </div>
  );
};

export default Intro;
